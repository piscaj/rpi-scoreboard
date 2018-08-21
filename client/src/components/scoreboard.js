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
          <Well className="well">
          <div>Home</div>
            <Button className="button" bsStyle="primary" onClick={this.subtractHome}>
              -
            </Button>
            <span className="number">{this.state.homeScore}</span>
            <Button className="button" bsStyle="primary" onClick={this.addHome}>
              +
            </Button>
          </Well>
        </div>
      </div>
    );
  }
}
export default Scoreboard;
