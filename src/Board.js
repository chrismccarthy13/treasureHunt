import React, {Component} from 'react';
import App from './App.js'
import Square from './Square.js'

// create a class that extends a component
// create an array 
// create random generator 
// create a state for a bomb and treasure 
class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
            clicked: false,
            randomBomb: Math.floor(Math.random() * 8),
            randomTreasure: Math.floor(Math.random() * 8),
            count: 0,
        }
   
    }
// handleClick for eaxh square     
    
    handleClick(i) {
        const { randomBomb, randomTreasure } = this.state 
        const spaces = this.state.spaces
        const count = this.state.count

        if(i === randomBomb){
            spaces[i] = 'Bomb';
            this.setState({spaces: spaces});
            alert ('You lose!')
            window.location.reload()
        } else if(i === randomTreasure) {
            spaces[i] = 'Treasure';
            this.setState({spaces: spaces}); 
            alert ('Winner!')
            window.location.reload()
        }else{
            spaces[i] = "Tree";
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
    
    resetForm = () => {
      this.setState({
          ...this.state,
          spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      })
      window.location.reload()
    }
    
    render () {
    let status = 'Treasure Hunt: '
    
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
            <button className="reset" onClick={this.resetForm}>Play Again</button>
        </div>
    );
 }   
}

export default Board