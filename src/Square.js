import React, {Component} from 'react';
import App from './App.js'
import Board from './Board.js'

// Created a function for each square comprised of a button
// The button will use props to pass values into

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