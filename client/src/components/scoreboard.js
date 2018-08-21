import React, { Component } from "react";
import { Well } from "react-bootstrap";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      awayScore: 0,
      dataLoading: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("/status/score")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({
        homeScore: data.homeScore,
        awayScore: data.awayScore
      
      }));
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

  subtractAway = () => {
    fetch("/setDigit/away/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ awayScore: data.awayScore }));
  };

  addAway = () => {
    fetch("/setDigit/away/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ awayScore: data.awayScore }));
  };
  render() {
    return (
      <div>
        <div>
          <Well>
          <div className="number" >Home</div>
            <button className="button-3d" bsStyle="primary" onClick={this.subtractHome}>-</button>
            <span className="number">{this.state.homeScore}</span>
            <button className="button-3d" bsStyle="primary" onClick={this.addHome}>+</button>
            <div className="number" >Away</div>
            <button className="button-3d" bsStyle="primary" onClick={this.subtractAway}>-</button>
            <span className="number">{this.state.awayScore}</span>
            <button className="button-3d" bsStyle="primary" onClick={this.addAway}>+</button>
          </Well>
        </div>
      </div>
    );
  }
}
export default Scoreboard;
