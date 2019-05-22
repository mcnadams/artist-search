import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ artist }) {
  const nameURI = encodeURIComponent(artist.name);
  const path = `/artist/${nameURI}/${artist.id}`;
  return (
    <>
      <Link to={path} style={{ 
        color: 'black', 
        padding: '5px', 
        fontSize: '1em' 
      }}>{artist.name}</Link>
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
