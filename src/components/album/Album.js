import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Album({ album }) {
  const path = `/album/${album.id}`;
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
  album: PropTypes.object.isRequired
};

export default Album;
