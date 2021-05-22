import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQueenById } from '../services/DragService';

const useQueenDetail = () => {
  const [loading, setLoading] = useState(true);
  const [queen, setQueen] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchQueenById(id)
    
      .then(setQueen)
      .finally(() => setLoading(false));
  }, [id]);
    
  return { loading, queen };

};
export default useQueenDetail;
