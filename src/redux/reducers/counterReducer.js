import {
  Types
} from "../actions/counterActions";

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case Types.INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case Types.DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return { ...state };
  }
};

export default counterReducer;