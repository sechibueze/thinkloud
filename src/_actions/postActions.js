import axios from 'axios';
import { GET_POSTS } from './types';
import { GET_POSTS_URL } from '../_data/endpoints';

export const fetchPosts = () => dispatch => {
  return axios
  .get(GET_POSTS_URL)
  .then(({ data }) => {
    return dispatch({
      type: GET_POSTS,
      payload: data
    });
  })
  .catch(e => console.log('Error', e))

};