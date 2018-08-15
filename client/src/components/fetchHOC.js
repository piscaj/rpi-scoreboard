import React, { Component } from "react";

const withFetching = url => Component =>
  class WithFetching extends React{
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
export default withFetching;
