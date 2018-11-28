import React, { Component } from "react";
//import Button from 'react-bootstrap/lib/Button';

class ScoreboardFootball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      awayScore: 0,
      qtr: 0,
      dataLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ dataLoading: true });
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
        <button className="btn" onClick={this.subtractHome}>-

        </button>
        <input className="number" value={this.state.homeScore} />
        <button className="btn" onClick={this.addHome}>+

        </button>
        <div className="title">Away</div>
        <button className="btn" onClick={this.subtractAway}>-
          
        </button>
        <input className="number" value={this.state.awayScore} />
        <button className="btn" onClick={this.addAway}>+
         
        </button>
        <div className="title">Quarter</div>
        <button className="btn" onClick={this.subtractQtr}>-
         
        </button>
        <input className="number" value={this.state.qtr} />
        <button className="btn" onClick={this.addQtr}>+
          
        </button>
        <div className="" />
        <a onClick={this.resetScore}>Reset Score</a>
      </div>
    );
  }
}
export default ScoreboardFootball;
