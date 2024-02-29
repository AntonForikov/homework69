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

  return (
    <section className='d-flex mx-3'>
      <div><img src={showData?.image.medium} alt={showData?.name}/></div>
      <div className='ms-3'>
        <h1>{showData?.name}</h1>
        <span
          dangerouslySetInnerHTML={showData ? {__html: showData.summary}: undefined }
        />
      </div>
    </section>
  );
};

export default Show;