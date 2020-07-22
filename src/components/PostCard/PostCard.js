import React from 'react';
import PropTypes from 'prop-types';
const PostCard = ({ post }) => {

  const { _id, title, content } = post;
  return ( 
    <div className='post-card' data-test='post-card'>
      {/* <img src={post_image} alt={'Thumbnail of post'} className='post-icon' data-test='post-icon'/> */}
      <p className='post-title' data-test='post-title'> {title && title } </p>
      <article className='post-content' data-test='post-content'>
        { content && content }
      </article>
     
    </div>
   );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    // post_image: PropTypes.string.isRequired,
    // category: PropTypes.shape({
    //   title: PropTypes.string.isRequired
    // }),
  })
};
 
export default PostCard;