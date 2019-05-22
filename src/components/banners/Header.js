import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const styles = {
    fontSize: '3em',
    textAlign: 'center',
    color: 'black',
    background: '#faf200c8',
    borderRadius: '100%',
    width: '75vw',
    padding: '13px'
  };
  return (
    <Link to='/'>
      <header style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={styles}>Welcome to Artist Search</h1>
      </header>
    </Link>
  );
}
