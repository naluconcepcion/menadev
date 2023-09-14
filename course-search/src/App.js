import React, { useState, useEffect } from 'react';
import Main from './Pages/Main';
import Welcome from './Pages/Welcome';
import About from './Pages/About';
import Navigation from './Navigation';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main'); // Default to 'main'

  let content;

  if (currentPage === 'main') {
    content = <Main />;
  } else if (currentPage === 'welcome') {
    content = <Welcome />;
  }
  else if (currentPage === 'about') {
    content = <About />;
  }

  // return (
    // <div className="App">
      // <Navigation setPage={setCurrentPage} />
      // {content}
    // </div>
//   );
  return (
    <div className = "App">
      <About/>
    </div>
  )
}

export default App;
