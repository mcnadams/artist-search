import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songs }) {
  const songList = songs.map((song, i) => {
    return (
      <li key={i}>
        <Song song={song} />
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
  songs: PropTypes.array.isRequired
};

export default Songs;
