import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement } from "../redux/actions/actions";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

class Counter extends Component {
  // actions
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.count}</h1>
          <div style={containerStyle}>
            <button
              onClick={this.decrement}
              onClick={() => {
                console.log(this.decrement);
              }}
              type="button"
              style={buttonStyle}
            >
              -
            </button>
            <button onClick={this.increment} type="button" style={buttonStyle}>
              +
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
