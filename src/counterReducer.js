export const counterReducerSimple = (state, action) => {
  return {count: state.count +1};
}

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    
    case 'decrement':
      return {count: state.count - 1};
    
    case 'reset':
      return {count: 0};
  };
  throw Error(`Unknown action: ${action.type}`);
}

export const inputReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload};
    
    case 'decrement':
      return {count: state.count - action.payload};
    
    case 'reset':
      return {count: 0};
  };
  throw Error(`Unknown action: ${action.type}`);
}