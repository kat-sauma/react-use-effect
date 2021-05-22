import React from 'react';
import DragList from '../components/app/dragRace/QueenList';
import useQueenList from '../hooks/useQueenList';


const QueenListContainer = () => {
  const { 
    loading, queens, page, handleNextClick, handlePreviousClick 
  } = useQueenList();

  return loading ? (
    <section role="img" aria-label="loading">
      <img role="spinner"
        aria-label="loading spinner" 
        src="loadingedit3.gif"
      />;
    </section>
  ) : (
    <main>
      <button onClick={handlePreviousClick}>
        last
      </button>
      <p>{page}</p>
      <button onClick={handleNextClick}>
        next
      </button>
      <DragList queens = { queens } />
    </main>
  );
};

export default QueenListContainer;
