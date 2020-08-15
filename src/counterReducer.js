const SUBTRACT_TEN = 'SUBTRACT_TEN';
const SUBTRACT_ONE = 'SUBTRACT_ONE';
const ADD_ONE = 'ADD_ONE';
const ADD_TEN = 'ADD_TEN';
const RESET = 'RESET';

export const ACTION_SUBTRACT_TEN = { type: SUBTRACT_TEN };
export const ACTION_SUBTRACT_ONE = { type: SUBTRACT_ONE };
export const ACTION_ADD_ONE = { type: ADD_ONE };
export const ACTION_ADD_TEN = { type: ADD_TEN };
export const ACTION_RESET = { type: RESET };

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case SUBTRACT_TEN:
      return state - 10;
    case SUBTRACT_ONE:
      return state - 1;
    case ADD_ONE:
      return state + 1;
    case ADD_TEN:
      return state + 10;
    case RESET:
      return 0;
    default:
      return state;
  }
};
export default counterReducer;
