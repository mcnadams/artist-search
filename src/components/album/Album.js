import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Album({ album, artist }) {
  const artistURI = encodeURIComponent(artist);
  const path = `/album/${artistURI}/${album.id}`;
  const date = album.date.slice(0, 4);
  return (
    <>
    <Link to={path}>
      <img src={album.image} style={{ width: '200px' }} />
      <p>{album.title} ({date})</p>
    </Link>
    </>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};

export default Album;
