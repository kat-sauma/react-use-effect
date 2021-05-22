import { useState, useEffect } from 'react';
import { fetchQueens } from '../services/DragService';


const useDragQueenList = () => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);
  const [page, setPage] = useState(1);
  
  const handleNextClick = () => {
    setPage((page) => page + 1);
  };

  const handlePreviousClick = () => {
    if(page > 1) {
      setPage((page) => page - 1);
    }
  };

  useEffect(() => {
    fetchQueens(page)
      .then(setQueens)
      .finally(() => setLoading(false));
  }, [page]);

  return { loading, queens, page, handleNextClick, handlePreviousClick };
};

export default useDragQueenList;
