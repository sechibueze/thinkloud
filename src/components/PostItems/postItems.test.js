import React from 'react';
import { shallow } from 'enzyme';
import PostItems from './PostItems';

import { configureMockStore } from '../../_utils/functions';
const initialState = {
  posts: {
    postItems: [
      {
        title: 'Example title 1',
        content: 'Example content 1'
      },
      {
        title: 'Example title 2',
        content: 'Example content 2'
      },
      {
        title: 'Example title 3',
        content: 'Example content 3'
      }
    ]
  }
};

describe('PostItems suites', () => {
  const store = configureMockStore(initialState);
  it('Shoud render without errors', () => {
    const component = shallow(<PostItems store={store} />).childAt(0).dive();
    const wrapper = component.find(`[data-test='post-items']`);
    expect(wrapper.length).toBe(1);
  });
});