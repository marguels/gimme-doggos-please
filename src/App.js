import React, { useState } from 'react';
import doggo from './doggo.svg';
import './App.css';

function App() {
  const [doggoImg, setDoggoImg] = useState();

  const giveMeADoggo = async () => {
    const response = await fetch('https://api.thedogapi.com/v1/images/search');
    const jsonResponse = await response.json();
    setDoggoImg(jsonResponse[0].url);
    return doggo;
  };

  return (
    <div className="App">
      <header className="App-header">
        {doggoImg ? (
          <img src={doggoImg} className="App-logo" alt="doggo-img" />
        ) : (
          <img src={doggo} className="App-logo" alt="logo" />
        )}
        <button onClick={() => giveMeADoggo()} className="Get-doggo-button">
          Go get me a doggo
        </button>
      </header>
    </div>
  );
}

export default App;
