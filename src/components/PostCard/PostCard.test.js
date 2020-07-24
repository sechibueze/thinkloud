import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import PostCard from './PostCard';
const post = {
  // _id: '1',
  title: 'A band new car',
  content: 'Just a summary fro you',
  // post_image: 'https://picsum.io/200/200.png',
  // category: {
  //   title: 'News'
  // }
};

describe('PostCard', () => {

  describe('checking propTypes', () => {
    it('Should NOT throw any errors', () => {
      const expectedPropTypes = {
        post: post
      };

      const propTypesErrors = checkPropTypes(PostCard.propTypes, expectedPropTypes, 'props', PostCard.name);
      expect(propTypesErrors).toBeUndefined();
    });
  });

  it('Should render PostCard without errors', () => {
    const component = shallow(<PostCard post={post} />);
    const wrapper = component.find(`[data-test='post-card']`);
    expect(wrapper.length).toBe(1);
  });

  it('Should contain a post title', () => {
    const component = shallow(<PostCard post={post} /> );
    const wrapper = component.find('[data-test="post-title"]');
    expect(wrapper.length).toBe(1);
  });

  it('It should contain a post content', () => {
    const component = shallow(<PostCard post={post} />);
    const wrapper = component.find('[data-test="post-content"]');
    expect(wrapper.length).toEqual(1);
  });

  // it('It should contain a post summary', () => {
  //   const component = shallow(<PostCard post={post} />);
  //   const wrapper = component.find('[data-test="post-summary"]');
  //   expect(wrapper.length).toEqual(1);
  // });

  // it('Post summary in PostCard component should not be more than 100 characters', () => {
  //   const component = shallow(<PostCard post={post} />);
  //   const wrapper = component.find('[data-test="post-summary"]');
  //   expect(wrapper.text().length).toBeLessThanOrEqual(100);
  // });
});