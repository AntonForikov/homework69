import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ResponseFromApi, Show, ShowOption} from '../types';
import {RootState} from '../app/store';

export const getShowList = createAsyncThunk<ShowOption[], string, {state: RootState}>(
  'show/list',
  async (userInput) => {
    const {data: showList} = await axios.get<ResponseFromApi[]>(`https://api.tvmaze.com/search/show?q=${userInput}`);
    return showList.map((item) => {
      return {label: item.show.name, id: item.show.id, name: item.show.name};
    });
  }
);

export const setTargetShow = createAsyncThunk<Show, string> (
  'show/target',
  async (id) => {
    const {data: targetShow} = await axios.get<Show>(`http://api.tvmaze.com/shows/${id}`);
    return targetShow;
  }
);