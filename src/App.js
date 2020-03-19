import React from 'react';
import List from './List'

function App() {
  let numbers = [1, 2, 3, 4, 5]
  return (
    <div className="App">
        <List numbers={numbers}></List>
    </div>
  );
}

export default App;
