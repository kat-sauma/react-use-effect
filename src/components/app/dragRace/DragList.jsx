import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen';

function DragList({ queens }) {
  return (
    <ul aria-label="drag queens">
      { queens.map((queen) => (
        <li key={queen.id}>
          <Queen
            id={queen.id}
            name={queen.name}
            winner={queen.winner}
            img={queen.img}
          />
        </li>
      ))}
    </ul>
  );
}

DragList.propTypes = {
  queens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      winner: PropTypes.string.boolean,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DragList;
