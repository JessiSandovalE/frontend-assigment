import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Article from './components/Article'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
        <div className='content'>
          <Article />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
