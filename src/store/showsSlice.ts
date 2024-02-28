import {ShowOption} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {getShowList} from './showsThunk';

interface ShowsState {
  userInput: string
  showOptions: ShowOption[]
  selectedShow: {
    id: number,
    label: string
  } | null
}

const initialState: ShowsState = {
  userInput: '',
  showOptions: [],
  selectedShow: null
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    userInput: (state, action) => {
      state.userInput = action.payload;
    },
    clearInput: (state) => {
      state.userInput = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShowList.fulfilled, (state, action) => {
      state.showOptions = action.payload
    })
  }
});

export const showReducer = showSlice.reducer;
// export const {userInput, clearInput} = showSlice.actions;
// export const selectUserInput = (state: RootState) => state.show.userInput;
export const selectShows = (state: RootState) => state.show.showOptions;
