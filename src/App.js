import React, {Component} from 'react';
import Board from './Board.js'
import './App.css';

class App extends Component {
        
  render () {
  return (
        <div id="gameboard">
            <Board />
        </div>
  );
  }
}


export default App;
