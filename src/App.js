import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Drawing from './Components/Drawing/Drawing';
import Description from './Components/Description/Description';
import useSticky from "./Components/Header/scrollHandler"

function App() {
  // const { isSticky, element } = useSticky()
  return (
    <div className="App">
      <Header />
      <Description/>
    </div>
  );
}

export default App;
