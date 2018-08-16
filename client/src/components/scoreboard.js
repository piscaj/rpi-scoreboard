import React, { Component } from "react";
import { Button, Well } from 'react-bootstrap';

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
          <Well>
          <Button bsStyle="primary" onClick={this.subtractHome}>-</Button>
          <div>{this.state.homeScore}</div>
          <Button bsStyle="primary" onClick={this.addHome}>+</Button>
          </Well>
        </div>
      </div>
    );
  }
}
export default Scoreboard;


