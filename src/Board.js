import React, {Component} from 'react';
import App from './App.js'
import Square from './Square.js'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
            xIsNext: null,
        }
    }
    
    handleClick = (e) => {
        const { spaces } = this.state.
        form[e.target.spaces] = e.target.value
        this.setState({ form })
        // console.log("0")
        // // if(spaces[0] === "?"){
        //     return this.renderSquare()
        
    }
    // handleClick(i) {
    //     const spaces = this.state.spaces.slice();
    //     if( (spaces) || spaces['?']){
    //         return this.renderSquare()}
        // if ( calculateWinner(squares) || squares[i] ) {
        //     return;
        // }
        // squares[i] = this.state.xIsNext ? 'X' : 'O';
        // this.setState({
        //     squares: squares,
        //     xIsNext: !this.state.xIsNext,
        // });
    }
    
    renderSquare=(i)=>{
        return (
            <Square 
            value={this.state.spaces[i]}
            onClick={() => this.handleClick(i)}
            />
        )
    }
    
    render () {
    //   const winner =
    //   calculateWinner(this.state.squares);
    //   let status;
    //   if ( winner ) {
    //       status = 'Winner' + winner;
    //   } else {
    //       status = 'Next player: ' + 
    //      (this.state.xIsNext ? 'X' : 'O' );
    //   }
        
    return(
        <div className="board">
            <div className="Status"></div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );
 }   
}

export default Board