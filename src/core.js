import {List} from 'immutable';

export setEntries = (state, entries) => {
  return state.set('entries', List(entries));
};