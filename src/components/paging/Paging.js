import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, nextPage, children, fetchArtists }) {
  return (
    <>
      {currentPage > 1 &&
        <button onClick={() => {
          nextPage(currentPage - 1);
          fetchArtists();
        }}>Previous Page</button>}

        {`${currentPage} / ${totalPages}`}

        {currentPage < totalPages &&
          <button onClick={() => {
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
