import mockAxios from 'axios';
import { fetchPosts } from '../_actions/postActions';
import { GET_POSTS } from '../_actions/types';
import { configureMockStore } from '../_utils/functions';
import { postItems } from '../_data/posts';
import { GET_POSTS_URL } from '../_data/endpoints';

describe('fetchPosts() action', () => {
  let store = configureMockStore({});
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    store.clearActions();
  });

  it('Should dispatch the list of post items', async () => {
    
    const expectedAction = [{ type: GET_POSTS, payload: postItems}];

     await store.dispatch(fetchPosts());
      const dispatchedAction = store.getActions();
      expect(mockAxios.get).toHaveBeenCalledWith(GET_POSTS_URL);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(dispatchedAction.length).toEqual(1);
      expect(dispatchedAction).toEqual(expectedAction);
  });

});