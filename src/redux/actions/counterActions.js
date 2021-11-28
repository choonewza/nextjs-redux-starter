// Couter types
export const Types={
  INCREMENT_COUNTER:"INCREMENT_COUNTER",
  DECREMENT_COUNTER:"DECREMENT_COUNTER"
}

export const incrementCounter = () => ({
  type: Types.INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: Types.DECREMENT_COUNTER,
});
