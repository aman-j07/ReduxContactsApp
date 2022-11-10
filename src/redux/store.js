import {createStore} from 'redux';
import { reducer } from './reducers/contactReducer';

const store=createStore(reducer);
export default store
