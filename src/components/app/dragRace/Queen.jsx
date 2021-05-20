import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Queen({ id, name, winner, image }) {
  return (
    <li>
      <Link key={id} to={`/${id}`} aria-label="queen">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>Season Winner: {winner}</p>
            
      </Link>
    </li>
  );
}

Queen.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};

export default Queen;

