import {Autocomplete, TextField} from '@mui/material';
import {selectShows} from '../../store/showsSlice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import React from 'react';
import {getShowList, setTargetShow} from '../../store/showsThunk';
import {useNavigate} from 'react-router-dom';
import {ShowOption} from '../../types';


const Searcher = () => {
  const navigate = useNavigate();
  const shows = useAppSelector(selectShows);
  const dispatch = useAppDispatch();

  const handleInputChange = (_: React.SyntheticEvent<Element, Event>, value: string) => {
    dispatch(getShowList(value));
  };

  const handleOptionSelect = async (_: React.SyntheticEvent<Element, Event>, value: ShowOption | null) => {
    if (value !== null) {
      navigate(`/shows/${value.id}`);
    }
  };

  return (
    <div className='w-50 m-auto my-3'>
      <Autocomplete
        getOptionKey={(value) => value.id}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        options={shows}
        onInputChange={handleInputChange}
        onChange={handleOptionSelect}
        renderInput={(params) => <TextField {...params} label='Search for TV shows'></TextField>}>
      </Autocomplete>
    </div>
  );
};
export default Searcher;
