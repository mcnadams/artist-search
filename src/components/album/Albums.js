import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

function Albums({ albums, artist }) {
  const albumList = albums.map((album, i) => {
    return (
      <li key={i}>
        <Album album={album} artist={artist} />
      </li>
    );
  });

  return (
    <ul>
      {albumList}
    </ul>
  );
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default Albums;
