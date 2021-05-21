/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function QueenDetail({
  image, 
  name, 
  winner, 
  MissCongeniality, 
  quote
}) {
  return (
    
    <section role="listitem" className="queen-detail" aria-label="queen info">
      <Link to="/">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{quote}</p>
        <p>{winner}</p>
        <p>{MissCongeniality}</p>
      </Link>
    </section>
  );
}

QueenDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
  MissCongeniality: PropTypes.string.isRequired,
};

export default QueenDetail;
