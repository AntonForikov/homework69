import {Autocomplete, TextField} from '@mui/material';
import {selectShows, selectUserInput} from '../../store/showsSlice';
import {useAppSelector} from '../../app/hooks';


const Searcher = () => {
  const shows = useAppSelector(selectShows);
  const userInput = useAppSelector(selectUserInput);

  return (
    <div className='w-50 m-auto my-3'>
      <Autocomplete
        options={shows}
        inputValue={userInput}
        // onChange={}
        renderInput={(params) => <TextField {...params} label='Search for TV shows'>hui</TextField>}></Autocomplete>
    </div>
  );
};
export default Searcher;
