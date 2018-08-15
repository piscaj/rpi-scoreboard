import React, { Component } from "react";

class Scoreboard extends React{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  Decrement = () => {
    if(this.state.count > 0){
       this.setState({count: this.state.count -1 })
    } else{
      this.setState({count: this.state.count})
    }
  }
  Increment = () => {this.setState({count: this.state.count +1 })}
  render() {
    return(
      <div>
         <button onClick={this.Decrement}>Decrement</button>
        <div>{this.state.count}</div>
        <button onClick={this.Increment}>Incriment</button>
      </div>
    );
  }
}
export default Scoreboard;


