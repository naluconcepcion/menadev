// Navigation.js
import React from 'react';

function Navigation({ setPage }) {
  return (
    <div>
        <button onClick={() => setPage('welcome')}>Welcome</button>
        <button onClick={() => setPage('main')}>Main</button>
        <button onClick={() => setPage('about')}>About</button>
    </div>
  );
};

export default Navigation;