import Header from '../../components/Header/Header';
import Searcher from '../../components/Searcher/Searcher';
import {Outlet} from 'react-router-dom';


const Home = () => {
  return (
    <>
      <Header />
      <Searcher />
      <Outlet/>
    </>
  );
};

export default Home;