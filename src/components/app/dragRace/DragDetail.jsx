/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DragDetail({
  image, 
  name, 
  winner, 
  MissCongeniality, 
  quote,
  season
}) {
  return (
    
    <section role="listitem" className="queen-detail" aria-label="queen info">
      <Link to="/">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{quote}</p>
        <p>{winner}</p>
        <p>{season}</p>
        <p>{MissCongeniality}</p>
      </Link>
    </section>
  );
}

DragDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
  season: PropTypes.string.isRequired,
  MissCongeniality: PropTypes.string.isRequired,
};

export default DragDetail;
