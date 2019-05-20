import React from 'react';
import Artists from '../../components/artist/Artists';

export default function Search() {
  const artists = [
    {
      name: 'Lady Gaga',
      id: 1
    },
    {
      name: 'Parker',
      id: 2
    },
    {
      name: 'Ryan',
      id: 3
    }
  ];

  return (
    // <form>
    //   <input type="text" name="text"></input>
    //   <button>Search</button>
    // </form>
    <Artists artists={artists} />
  );
}
