import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songs, artist }) {
  const songList = songs.map((song, i) => {
    return (
      <li key={i}>
        <Song song={song} artist={artist} />
      </li>
    );
  });

  return (
    <ul>
      {songList}
    </ul>
  );
}

Songs.propTypes = {
  songs: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default Songs;
