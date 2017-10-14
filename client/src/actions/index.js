import axios from 'axios';
import { FETCH_USER } from './types';

// when an action go through redux-thunk, if it see a function is returned, it calls that function right away
// with dispatch function as param
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
}