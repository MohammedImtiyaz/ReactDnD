import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = { count:0 };
  }
  handleAdd() {
    this.setState({ count:count++ )};
  }

  render() {
    return (
      <div>
        <label>Added balance:{this.state.add}</label>
        <label>subed balance:{this.state.sub}</label>
        <button onClick="handleAdd">+</button>
        <button onClick="handleSub">-</button>
      </div>
    );
  }
}

export default Home;
