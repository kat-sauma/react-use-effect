import React, { useState, useEffect } from 'react';
import DragList from '../components/app/dragRace/DragList';
import { fetchQueens } from '../services/DragService';


const DragContainer = () => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetchQueens(page)
    .then(setQueens)
    .finally(() => setLoading(false));
  }, [page]);

  if(loading) return (
    <section role="img" aria-label="loading">
      <img role="spinner"
        aria-label="loading spinner" 
        src="loadingedit3.gif"
      />;
    </section>
  );
  else return (
    <main>
      <button onClick={() => setPage((prevPage) => prevPage - 1)}>
        last
      </button>
      <p>{page}</p>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        next
      </button>
      <DragList queens = { queens } />
    </main>
  );
};

export default DragContainer;
