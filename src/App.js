import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Drawing from './Components/Drawing/Drawing';
import Description from './Components/Description/Description';

function App() {
  return (
    <div className="App">
      <Header />
      <Description/>
    </div>
  );
}

export default App;
