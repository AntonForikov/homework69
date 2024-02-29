import React, {useEffect} from 'react';
import {selectTargetShow} from '../../store/showsSlice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useParams} from 'react-router-dom';
import {setTargetShow} from '../../store/showsThunk';


const Show: React.FC = () => {
  const showData = useAppSelector(selectTargetShow);
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(setTargetShow(id));
  }, [id, dispatch]);
  console.log('Here show element');

  return (
    <section>
      {/*<img src={showData?.image.medium} alt={showData?.name}/>*/}
      <img src={showData?.image} alt={showData?.name}/>
      <div>
        <h1>{showData?.name}</h1>
        <p>{showData?.summary}</p>
      </div>
    </section>
  );
};

export default Show;