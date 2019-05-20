import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ artist }) {
  const path = `/artist/${artist.id}`;
  return (
    <>
      <Link to={path}>{artist.name}</Link>
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
