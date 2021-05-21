import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DragDetail from '../components/app/dragRace/DragDetail';
import { fetchQueenById } from '../services/DragService';

const DetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [queen, setQueen] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchQueenById(id)

      .then(setQueen)
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return (
    <section role="img" aria-label="loading">
      <img role="spinner"
        aria-label="loading spinner" 
        src="public/loadingedit3.gif"
      />
    </section>
  );
  else return ( 
    <DragDetail { ...queen } />
  );
};

export default DetailContainer;
