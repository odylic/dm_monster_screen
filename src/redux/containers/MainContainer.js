import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

// mapped State to props from
// reducers/index.js === state.counter
// counterReducer === .count
const mapStateToProps = (state) => ({
  count: state.counter.count,
});

// will get actions from actions.js
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment, decrement } = this.props;
    // destructured from State and Dispatch to props

    return (
      <div>
        MainContainer
        <h1>{count}</h1>
        <div style={containerStyle}>
          <button style={buttonStyle} onClick={decrement}>
            -
          </button>
          <button style={buttonStyle} onClick={increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
