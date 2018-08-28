import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      awayScore: 0,
      outs: 0,
      balls: 0,
      strikes: 0,
      inning: 0,
      dataLoading: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("/status/score")
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          homeScore: data.homeScore,
          awayScore: data.awayScore
        })
      );
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

  subtractOuts = () => {
    fetch("/setDigit/outs/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ outs: data.outs }));
  };

  addOuts = () => {
    fetch("/setDigit/outs/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ outs: data.outs }));
  };

  subtractBalls = () => {
    fetch("/setDigit/balls/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ balls: data.balls }));
  };

  addBalls = () => {
    fetch("/setDigit/balls/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ balls: data.balls }));
  };

  subtractStrikes = () => {
    fetch("/setDigit/strikes/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ strikes: data.strikes }));
  };

  addStrikes = () => {
    fetch("/setDigit/strikes/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ strikes: data.strikes }));
  };

  subtractInning = () => {
    fetch("/setDigit/inning/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ inning: data.inning }));
  };

  addInning = () => {
    fetch("/setDigit/inning/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ inning: data.inning }));
  };

  resetScore = () => {
    fetch("/setDigit/resetScore")
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          homeScore: data.homeScore,
          awayScore: data.awayScore,
          outs: data.outs,
          balls: data.balls,
          strikes: data.strikes,
          inning: data.inning,
        })
      );
  };

  render() {
    return (
      <div>
          <div className="title">Home</div>
            <Button className = "buttonSize" bsStyle="default" onClick={this.subtractHome}><Glyphicon glyph="minus" /></Button>
            <input className="number" value = {this.state.homeScore} />
            <Button bsSize="large" bsStyle="default" onClick={this.addHome}><Glyphicon glyph="plus" /></Button>
           <div className="title">Away</div>
            <Button bsSize="large" bsStyle="default" onClick={this.subtractAway}><Glyphicon glyph="minus" /></Button>
            <input className="number" value = {this.state.awayScore} />
            <Button bsSize="large" bsStyle="default" onClick={this.addAway}><Glyphicon glyph="plus" /></Button>
            <div className="title">Outs</div>
            <Button bsSize="large" bsStyle="default" onClick={this.subtractOuts}><Glyphicon glyph="minus" /></Button>
            <input className="number" value = {this.state.outs} />
            <Button bsSize="large" bsStyle="default" onClick={this.addOuts}><Glyphicon glyph="plus" /></Button>
            <div className="title">Balls</div>
            <Button bsSize="large" bsStyle="default" onClick={this.subtractBalls}><Glyphicon glyph="minus" /></Button>
            <input className="number" value = {this.state.balls} />
            <Button bsSize="large" bsStyle="default" onClick={this.addBalls}><Glyphicon glyph="plus" /></Button>
            <div className="title">Strikes</div>
            <Button bsSize="large" bsStyle="default" onClick={this.subtractStrikes}><Glyphicon glyph="minus" /></Button>
            <input className="number" value = {this.state.strikes} />
            <Button bsSize="large" bsStyle="default" onClick={this.addStrikes}><Glyphicon glyph="plus" /></Button>
            <div className="title">Inning</div>
            <Button bsSize="large" bsStyle="default" onClick={this.subtractInning}><Glyphicon glyph="minus" /></Button>
            <input className="number" value = {this.state.inning} />
            <Button bsSize="large" bsStyle="default" onClick={this.addInning}><Glyphicon glyph="plus" /></Button>
            <div className="number" ></div>
            <Button bsSize="large" bsStyle="default" onClick={this.resetScore}><Glyphicon glyph="remove" /></Button>

      </div>
    );
  }
}
export default Scoreboard;
