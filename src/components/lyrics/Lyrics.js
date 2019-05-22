import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ lyrics }) {
  const lyricsP = lyrics.split('\n');
  const lyricsParas = lyricsP.map((paragraph, i) => {
    return (
      <p key={i}>
        {paragraph}
      </p>
    );
  });  
  return (
    <div>
      {lyricsParas}
    </div>
  );
}

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
