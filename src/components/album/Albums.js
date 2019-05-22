import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import { styles, stylesLI } from './css.js';

function Albums({ albums, artist }) {
  
  const albumList = albums.map((album, i) => {
    return (
      <li key={i} style={stylesLI}>
        <Album album={album} artist={artist} />
      </li>
    );
  });

  return (
    <ul style={styles}>
      {albumList}
    </ul>
  );
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default Albums;
