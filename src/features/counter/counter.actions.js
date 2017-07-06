import { COUNTER_ADD, COUNTER_SUBTRACT } from './counter.types';

export function add(amount = 1) {
  return {
    type: COUNTER_ADD,
    payload: amount,
  };
}

export function subtract(amount = 1) {
  return {
    type: COUNTER_SUBTRACT,
    payload: amount,
  };
}
