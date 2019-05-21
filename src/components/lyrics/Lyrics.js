import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ lyrics }) {
  return (
    <div>{lyrics}</div>
  );
}

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
