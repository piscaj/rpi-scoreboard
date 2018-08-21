import React, { Component } from "react";
import { Button, Well } from "react-bootstrap";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      dataLoading: false,
      error: null
    };
  }
  
  componentDidMount() {
    fetch("/status/score")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ homeScore: data.homeScore }));
  }

  subtractHome = () => {
    fetch("/setDigit/home/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ homeScore: data.homeScore }));
  };

  addHome = () => {
    fetch("/setDigit/home/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ homeScore: data.homeScore }));
  };
  render() {
    return (
      <div>
        <div>
          <div>Home</div>
          <Well>
            <Button bsStyle="primary" onClick={this.subtractHome}>
              -
            </Button>
            <div>{this.state.homeScore}</div>
            <Button bsStyle="primary" onClick={this.addHome}>
              +
            </Button>
          </Well>
        </div>
      </div>
    );
  }
}
export default Scoreboard;
