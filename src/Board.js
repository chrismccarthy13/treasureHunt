import React, {Component} from 'react';
import App from './App.js'
import Square from './Square.js'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
            clicked: false,
            randomBomb: 1,
            count: 0,
        }
    }
    
    handleClick(i) {
        const spaces = this.state.spaces
        const randomBomb = spaces[Math.floor(Math.random()*8)]
        const randomTreasure = spaces[Math.floor(Math.random()*8)]
        const count = this.state.count
        
        if(spaces[i] === randomBomb){
            spaces[i] = '!';
            this.setState({spaces: spaces});
        } else if(spaces[i] === randomTreasure) {
            spaces[i] = '#';
            this.setState({spaces: spaces});
        } else{
            spaces[i] = "$";
            this.setState({spaces: spaces});
        }
        
        count: this.setState({ count: count + 1 })
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
    const status = 'Treasure Hunt: '
    const count = this.setCount
    
    return(
        <div className="board">
            <div className="status">{status}</div>
            <table>
                <tr>
                    <td >{this.renderSquare(0)}</td>
                    <td >{this.renderSquare(1)}</td>
                    <td >{this.renderSquare(2)}</td>
                </tr>
                <tr>
                    <td >{this.renderSquare(3)}</td>
                    <td >{this.renderSquare(4)}</td>
                    <td >{this.renderSquare(5)}</td>
                </tr>
                <tr>
                    <td >{this.renderSquare(6)}</td>
                    <td >{this.renderSquare(7)}</td>
                    <td >{this.renderSquare(8)}</td>
                </tr>
            </table>
            <br></br>
            <div className="count">Turn Count: {this.state.count}</div>
        </div>
    );
 }   
}

export default Board