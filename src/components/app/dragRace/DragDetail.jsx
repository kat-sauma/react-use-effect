import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DragDetail({
  image, 
  name, 
  winner, 
  MissCongeniality, 
  quote,
  season,
  lipsyncSong,
  lipsyncArtist 
}) {
  return (
    
    <Link to={'/'}>
      <li role="listitem" className="queen-detail" aria-label="queen info">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{quote}</p>
        <p>{winner}</p>
        <p>{season}</p>
        <p>{lipsyncSong}</p>
        <p>{lipsyncArtist}</p>
        <p>{MissCongeniality}</p>
      </li>
    </Link>
  );
}

DragDetail.propTypes = {
  queen: PropTypes.object.isRequired
};

export default DragDetail;
