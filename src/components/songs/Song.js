import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ song, artist }) {
  const artistURI = encodeURIComponent(artist);
  const songURI = encodeURIComponent(song.title);
  const path = `/song/${artistURI}/${songURI}`;
  return (
    <>
      <Link to={path}>
        {song.title}
      </Link>
    </>
  );
}

Song.propTypes = {
  song: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};

export default Song;
