import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, nextPage, children, fetchArtists }) {

  const styleButtons = {
    padding: '5px',
    fontSize: '1.4em',
    opacity: '.95',
    borderRadius: '5px'
  };
  const stylePages = {
    fontSize: '1.7em',
    margin: '2px 5px',
    padding: '0 12px',
    background: 'white',
    opacity: '.7',
    borderRadius: '5px'
  };

  return (
    <>
      {currentPage > 1 &&
        <button style={styleButtons} onClick={() => {
          nextPage(currentPage - 1);
          fetchArtists();
        }}>Previous Page</button>}

      {totalPages > 1 && <span style={stylePages} >
        {`${currentPage} / ${totalPages}`}
      </span>}

      {currentPage < totalPages &&
        <button style={styleButtons} onClick={() => {
          nextPage(currentPage + 1);
          fetchArtists();
        }}>Next Page</button>}

        {children}
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  children: PropTypes.node,
  fetchArtists: PropTypes.func.isRequired
};

export default Paging;
