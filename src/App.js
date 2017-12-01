import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <div className="logo"></div>
          <div className="m-song-wrap">
            <div className="m-song-disc">
              <div className="m-song-turn">
                <div className="m-song-rollwrap"></div>
                <div className="m-song-lgour"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
