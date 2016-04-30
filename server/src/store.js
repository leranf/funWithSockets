import {createStore} from 'redux';
import reducer from './reducer';

export default makeStore = () => {
  return createStore(reducer);
};