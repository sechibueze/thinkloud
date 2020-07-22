// import { createStore, applyMiddleware } from 'redux';
import configureStore from 'redux-mock-store';
import { middlewares } from '../store';
// import rootReducer from '../_reducers/rootReducer';

export const configureMockStore = (initialStore = {}) => {
  const mockStore = configureStore(middlewares)(initialStore);
  return mockStore;
};