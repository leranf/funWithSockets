import makeStore from './src/store';
import { startServer } from './src/server';
import sampleData from 

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./sampleData.json')
});
store.dispatch({type: 'NEXT'});