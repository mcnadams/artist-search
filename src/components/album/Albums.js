import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

function Albums({ albums }) {
  const albumList = albums.map((album, i) => {
    return (
      <li key={i}>
        <Album album={album} />
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
  albums: PropTypes.array.isRequired
};
