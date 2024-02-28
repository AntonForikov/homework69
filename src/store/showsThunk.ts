import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../app/store';
import {ShowOption} from '../types';

export const getShowList = createAsyncThunk<ShowOption[], string, {state: RootState}>(
  'show/list',
  async (userInput, thunkAPI,) => {
    const {data: showList} = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
    console.log(showList);
    return showList.map((item) => {
      return {label: item.show.name, id: item.show.id}
    })
  }
)