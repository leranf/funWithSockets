import {setEntries, next, vote, initialState} from './core';

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return vote(state, action.entry)
    default:
      return state;
  }
};