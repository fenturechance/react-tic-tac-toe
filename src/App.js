import React from 'react';
import Mailbox from './Mailbox'
const messages = ['React', 'Re: React', 'Re:Re: React']

function App() {
  return (
    <div className="App">
        <Mailbox unreadMessage={messages}></Mailbox>
    </div>
  );
}

export default App;
