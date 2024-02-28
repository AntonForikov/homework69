import {Show} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

interface ShowsState {
  userInput: string
  shows: Show[]
}

const initialState: ShowsState = {
  userInput: '',
  shows: []
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
    }
  }
});

export const showReducer = showSlice.reducer;
export const {userInput, clearInput} = showSlice.actions;
export const selectUserInput = (state: RootState) => state.show.userInput;
export const selectShows = (state: RootState) => state.show.shows;