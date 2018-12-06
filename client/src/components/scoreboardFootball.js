import React, { Component } from "react";
import socketIOClient from "socket.io-client";

//
class ScoreboardFootball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00",
      endpoint: "http://10.3.141.1:3002",
      //endpoint: "http://127.0.0.1:3002",
      homeScore: 0,
      awayScore: 0,
      qtr: 0,
      dataLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ dataLoading: false });

    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    socket.on("time", data => this.setState({ time: data }));
    socket.on("home", data => this.setState({ homeScore: data }));
    socket.on("away", data => this.setState({ awayScore: data }));
    socket.on("qtr", data => this.setState({ qtr: data }));

    fetch("/status/serialport")
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.connection === "closed") {
          fetch("/status/serialport/open")
          .then(response => {
            return response.json();
          })
          .then(data => {
            if (data.connection === "open") {
              this.setState({ dataLoading: false });
            }
          });
        }
      });
  }

  subtractHome = () => {
    fetch("/setDigit/home/subtract");
  };

  addHome = () => {
    fetch("/setDigit/home/add");
  };

  subtractAway = () => {
    fetch("/setDigit/away/subtract");
  };

  addAway = () => {
    fetch("/setDigit/away/add");
  };

  subtractQtr = () => {
    fetch("/setDigit/qtr/subtract");
  };

  addQtr = () => {
    fetch("/setDigit/qtr/add");
  };

  resetScore = () => {
    fetch("/setDigit/resetFootballScore");
  };

  resetTimer = () => {
    fetch("/status/timer/reset");
  };

  startTimer = () => {
    fetch("/status/timer/start");
  };

  stopTimer = () => {
    fetch("/status/timer/stop");
  };

  render() {
    if (this.state.error) {
      return <button>...Ooops! Something went wrong.</button>;
    }
    if (this.state.dataLoading) {
      return <h3>Updating Controls...</h3>;
    }
    return (
      <div>
        <div className="title">Home</div>
        <button className="btnL" onClick={this.subtractHome}>
          -
        </button>
        <input className="number" value={this.state.homeScore} />
        <button className="btnL" onClick={this.addHome}>
          +
        </button>
        <div className="title">Away</div>
        <button  className="btnL" onClick={this.subtractAway}>
          -
        </button>
        <input className="number" value={this.state.awayScore} />
        <button className="btnL" onClick={this.addAway}>
          +
        </button>
        <div className="title">Quarter</div>
        <button className="btnL" onClick={this.subtractQtr}>
          -
        </button>
        <input className="number" value={this.state.qtr} />
        <button className="btnL" onClick={this.addQtr}>
          +
        </button>
        <div className="timeDis">
          <button className="btnS" onClick={this.resetScore}> Reset Score </button>
        </div>
        <div className="timeBtn">
          <input className="time" value={this.state.time} />
        </div>
        <div className="timeBot">
        <span className="timeSpa"><button  className="btnT" onClick={this.stopTimer}>Stop</button></span>
        <span className="timeSpa"><button className="btnT" onClick={this.resetTimer}>Reset</button></span>
        <span className="timeSpa"><button className="btnT" onClick={this.startTimer}>Start</button></span>
        </div>
      </div>
    );
  }
}
export default ScoreboardFootball;
