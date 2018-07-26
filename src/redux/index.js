import { createStore as reduxCreateStore } from 'redux';
import reducer from './reducers';

const initialState = {};
const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;
