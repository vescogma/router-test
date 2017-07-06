import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './counter.actions';

const CounterComponent = ({ counter, add, subtract }) => (
  <div>
    This is supposed to be a Counter
    <div>
      current: { counter }
    </div>
    <button onClick={() => add()}>
      add
    </button>
    <button onClick={() => subtract()}>
      subtract
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  add: (number = 1) => dispatch(actions.add(number)),
  subtract: (number = 1) => dispatch(actions.subtract(number)),
});

export const Counter = withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterComponent));
