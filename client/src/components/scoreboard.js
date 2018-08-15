import React, { Component } from "react";

class Scoreboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      homeScore:0
    }
  }
  subtractHome = () => {
    if(this.state.homeScore > 0){
       this.setState({homeScore: this.state.homeScore -1 })
    } else{
      this.setState({homeScore: this.state.homeScore})
    }
  }
  addHome = () => {this.setState({homeScore: this.state.homeScore +1 })}
  render() {
    return(
      <div>
        <div>
          <div>Home</div>
        <button onClick={this.subtractHome}>-</button>
          {this.state.homeScore}
        <button onClick={this.addHome}>+</button>
        </div>
      </div>
    );
  }
}
export default Scoreboard;


