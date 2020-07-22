import { GET_POSTS } from '../../_actions/types';
import postReducer, { initialState } from './postReducer';

const postItems = [{
  title: 'Test post title',
  content: 'test content'
}];
describe('Post Reducer', () => {
  it('Should return the default state', () => {
    // let defaultState = undefined;
    const currentState = postReducer(initialState, {});
    expect(currentState).toEqual(initialState);
  });

  it('Should return the post items', () => {
    const action = { type : GET_POSTS , payload: postItems}
    const currentState = postReducer(initialState, action);
    expect(currentState.postItems.length).toEqual(postItems.length);
    expect(currentState.postItems).toEqual(postItems);
  });
});