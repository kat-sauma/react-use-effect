import React from 'react';
import QueenDetail from '../components/app/dragRace/QueenDetail';
import useQueenDetail from '../hooks/useQueenDetail';


const DetailContainer = () => {
  const { loading, queen } = useQueenDetail();

  if(loading) return (
    <section role="img" aria-label="loading">
      <img role="spinner"
        aria-label="loading spinner" 
        src="public/loadingedit3.gif"
      />
    </section>
  );
  else return ( 
    <QueenDetail { ...queen } />
  );
};

export default DetailContainer;
