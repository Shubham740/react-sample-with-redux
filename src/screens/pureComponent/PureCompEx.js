import React, { Component, PureComponent } from "react";

export default class PureCompEx extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  render() {
    console.log("rener method called =>>>");
    return (
      <div>
        <p>counter is = === {this.state.counter}</p>

        <button
          onClick={() => {
            this.setState({ counter: 1 });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
