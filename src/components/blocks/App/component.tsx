import React, { ReactElement } from 'react';

import './style.css';

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <p>
        Rick is a mad scientist who drags his grandson, Morty, on crazy sci-fi adventures.
        <br />
        Their escapades often have potentially harmful consequences for their family ...
      </p>
    </div>
  );
};

export default App;
