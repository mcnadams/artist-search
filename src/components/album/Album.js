import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Album({ album }) {
  const path = `/album/${album.id}`;
  return (
    <>
    <Link to={path}>{album.title}</Link>
    </>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired
};

export default Album;
