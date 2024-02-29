import {Show, ShowOption} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {getShowList, setTargetShow} from './showsThunk';

interface ShowsState {
  showOptions: ShowOption[]
  selectedShow: Show | null
}

const initialState: ShowsState = {
  showOptions: [],
  selectedShow: null
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getShowList.fulfilled, (state, action) => {
      state.showOptions = action.payload;
    });
    builder.addCase(setTargetShow.fulfilled, (state,action) => {
      state.selectedShow = action.payload;
    });
  }
});

export const showReducer = showSlice.reducer;
export const selectShows = (state: RootState) => state.show.showOptions;
export const selectTargetShow = (state: RootState) => state.show.selectedShow;
