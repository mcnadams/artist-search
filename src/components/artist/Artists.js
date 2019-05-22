import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artists }) {
  //get artists from search container
  const artistList = artists.map((artist, i) => {
    return (
      <li key={i}>
        <Artist artist={artist} />
      </li>
    );
  });

  return (
    <ul style={{ background: 'white', listStyle: 'none', width: '15vw' }}>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Artists;
