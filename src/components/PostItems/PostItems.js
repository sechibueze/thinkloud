import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../_actions/postActions';
import PostCard from '../PostCard/PostCard';
const PostItems = ({ postItems, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  });
  return ( 
    <div data-test='post-items'>

      {
        postItems.length > 0 && postItems.map((post, idx) => {
          let postConfig = {
            _id: post.id,
            title: post.title,
            content: post.body
          }

          return <PostCard key={idx} post={postConfig} />
        })
      }

    </div>
   );
};

PostItems.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  postItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  }))
};

const mapStateToProps = state => ({
  postItems: state.posts.postItems
});
export default connect(mapStateToProps, { fetchPosts })(PostItems);