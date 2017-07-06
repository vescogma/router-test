import { COUNTER_ADD, COUNTER_SUBTRACT } from './counter.types';

const initial = 0;

export const counterReducer = (state = initial, action = {}) => {
  switch (action.type) {
    case COUNTER_ADD:
      return state + action.payload;
    case COUNTER_SUBTRACT:
      return state - action.payload;
    default:
      return state;
  }
}