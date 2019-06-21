import React, {Component} from 'react';
import App from './App.js'
import Board from './Board.js'

function Square (props) {
    return(
        <button 
        className="square" 
        onClick={props.onClick}>
            {props.value}
        </button>
    );
}
    
export default Square