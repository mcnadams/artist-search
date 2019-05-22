import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Link to='/'>
      <header>
        <h1>Welcome to Artist Search</h1>
      </header>
    </Link>
  );
}
