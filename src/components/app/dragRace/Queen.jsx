import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Queen({ id, name, winner, image }) {
  return (
    <main>
      <Link key={id} to={'/$id'} aria-label="queen">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>Season Winner: {winner}</p>
            
      </Link>
    </main>
  );
}

Queen.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  winner: PropTypes.string.boolean,
  image: PropTypes.string.isRequired,
};

export default Queen;

