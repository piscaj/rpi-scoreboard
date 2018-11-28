import React, { Component } from "react";
import socketIOClient from "socket.io-client";

//
class ScoreboardFootball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00',
      endpoint: "http://10.3.141.1:3002",
      homeScore: 0,
      awayScore: 0,
      qtr: 0,
      dataLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ dataLoading: true });

    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("time", data => this.setState({ time: data }));

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
                fetch("/status/score")
                  .then(response => {
                    return response.json();
                  })
                  .then(data =>
                    this.setState({
                      homeScore: data.homeScore,
                      awayScore: data.awayScore,
                      qtr: data.qtr,
                      dataLoading: false
                    })
                  );
              }
            });
        } else {
          fetch("/status/score")
            .then(response => {
              return response.json();
            })
            .then(data =>
              this.setState({
                homeScore: data.homeScore,
                awayScore: data.awayScore,
                qtr: data.qtr,
                dataLoading: false
              })
            );
        }
      });
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

  subtractQtr = () => {
    fetch("/setDigit/qtr/subtract")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ qtr: data.qtr }));
  };

  addQtr = () => {
    fetch("/setDigit/qtr/add")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ qtr: data.qtr }));
  };

  resetScore = () => {
    fetch("/setDigit/resetFootballScore")
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          homeScore: data.homeScore,
          awayScore: data.awayScore,
          qtr: data.qtr
        })
      );
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
        <button className="btn" onClick={this.subtractHome}>
          -
        </button>
        <input className="number" value={this.state.homeScore} />
        <button className="btn" onClick={this.addHome}>
          +
        </button>
        <div className="title">Away</div>
        <button className="btn" onClick={this.subtractAway}>
          -
        </button>
        <input className="number" value={this.state.awayScore} />
        <button className="btn" onClick={this.addAway}>
          +
        </button>
        <div className="title">Quarter</div>
        <button className="btn" onClick={this.subtractQtr}>
          -
        </button>
        <input className="number" value={this.state.qtr} />
        <button className="btn" onClick={this.addQtr}>
          +
        </button>
        <div className="">
          <a onClick={this.resetScore}>--- Reset Score ---</a>
        </div>
        <div><p></p></div>
        <div><input className="time" value={this.state.time} /></div>
        <div><a onClick={this.stopTimer}>Stop -------- </a>
        <a onClick={this.resetTimer}>Reset</a>
        <a onClick={this.startTimer}> -------- Start</a></div>
      </div>
    );
  }
}
export default ScoreboardFootball;
