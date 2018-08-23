import React, { Component } from "react";
import { Well, Grid, Row, Col } from "react-bootstrap";

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
  render() {
    return (
      <div>
        <Grid>
        <Well>
          <Row className="show-grid">
  
            <Col xs={12} md={6}>
              <label>Home</label>
              <div className="controls-wrapper">
                <button className="minus" onClick={this.subtractHome}>
                  -
                </button>
                <input name="quantity" value={this.state.homeScore} />
                <button className="plus" onClick={this.addHome}>
                  +
                </button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <label>Away</label>
              <div className="controls-wrapper">
                <button className="minus" onClick={this.subtractAway}>
                  -
                </button>
                <input name="quantity" value={this.state.awayScore} />
                <button className="plus" onClick={this.addAway}>
                  +
                </button>
              </div>
            </Col>
          </Row>
          </Well>
        </Grid>
      </div>
    );
  }
}
export default Scoreboard;
