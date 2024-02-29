import {Route, Routes} from 'react-router-dom';
import Home from './container/Home/Home';
import Show from './container/Show/Show';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path='shows/:id' element={<Show />}  />
        </Route>
        <Route path='*' element={<h1>Not found</h1>}  />
      </Routes>

    </>
  );
}

export default App;
