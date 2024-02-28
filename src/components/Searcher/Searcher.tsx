import {Autocomplete, TextField} from '@mui/material';

const Searcher = () => {
  const test = ['test', 'test1', 'test2'];

  return (
    <div className='w-50 m-auto my-3'>
      <Autocomplete
        options={test}
        renderInput={(params) => <TextField {...params} label='Search for TV shows'/>}
        id='sersher'
      />
    </div>
  );
};
export default Searcher;
