import { combineReducers } from 'redux';
import postReducer from './posts/postReducer';

export default combineReducers({
  posts: postReducer
});