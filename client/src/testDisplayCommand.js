
import React, { Component } from 'react';

class TestDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myStringIsNowHex: '00',
        outputStering: '',
        items: [],
      };
      this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
      fetch('/digit/'+e.target.value)
      .then(res => res.json())
      .then(data => this.setState({ items:data }));
    }
    render() {
      return(
        <div>
       <input type="text" onChange = {this.updateState}/>
       <div>
               <h4>{this.state.items.message}</h4>
               <h4>{this.state.items.command}</h4>
          </div>   
        </div>
      );
    }
  }

  export default TestDisplay;