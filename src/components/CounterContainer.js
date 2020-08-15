import React from 'react';
import { connect } from 'react-redux';
import {
  ACTION_ADD_ONE,
  ACTION_RESET,
  ACTION_SUBTRACT_TEN,
  ACTION_SUBTRACT_ONE,
  ACTION_ADD_TEN,
} from '../counterReducer';

const mapStateToProps = (state) => ({
  counter: state,
});
const CounterContainer = ({ counter, dispatch }) => (
  <div className='CounterContainer'>
    <p>{counter}</p>
    <button onClick={() => dispatch(ACTION_SUBTRACT_TEN)}>-10</button>
    <button onClick={() => dispatch(ACTION_SUBTRACT_ONE)}>-1</button>
    <button onClick={() => dispatch(ACTION_ADD_ONE)}>+1</button>
    <button onClick={() => dispatch(ACTION_ADD_TEN)}>+10</button>
    <button onClick={() => dispatch(ACTION_RESET)}>Reset</button>
  </div>
);

export default connect(mapStateToProps)(CounterContainer);
