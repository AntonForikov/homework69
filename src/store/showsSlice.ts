import {Show, ShowOption} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {getShowList, setTargetShow} from './showsThunk';

interface ShowsState {
  showOptions: ShowOption[]
  selectedShow: Show | null
  loading: boolean
}

const initialState: ShowsState = {
  showOptions: [],
  selectedShow: null,
  loading: false,
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShowList.fulfilled, (state, action) => {
      state.showOptions = action.payload;
    }).addCase(getShowList.rejected, () => {
      alert('Please check URL!')
    });

    builder.addCase(setTargetShow.pending, (state)=> {
      state.loading = true;
    }).addCase(setTargetShow.fulfilled, (state,action) => {
      state.selectedShow = action.payload;
      state.loading = false;
    }).addCase(setTargetShow.rejected,(state) => {
      state.loading = false;
      alert('Please check URL!')
    });
  }
});

export const showReducer = showSlice.reducer;
export const selectShows = (state: RootState) => state.show.showOptions;
export const selectTargetShow = (state: RootState) => state.show.selectedShow;
export const selectLoading = (state: RootState) => state.show.loading;

