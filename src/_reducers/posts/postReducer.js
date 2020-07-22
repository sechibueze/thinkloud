import { GET_POSTS } from '../../_actions/types';
export const initialState = {
  postItems: []
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  
  switch(type){
    case GET_POSTS:
      return {
        ...initialState,
        postItems: payload
      };
    
    default:
      return state;
  }
  
};