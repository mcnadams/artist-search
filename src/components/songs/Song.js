import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ song }) {
  const path = `/song/${song.id}`;
  return (
    <>
      <Link to={path}>
        {song.title}
      </Link>
    </>
  );
}

Song.propTypes = {
  song: PropTypes.object.isRequired
};

export default Song;
