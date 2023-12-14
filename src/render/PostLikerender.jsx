import React from 'react'

const PostLikerender = (props) => {
  return (
    <div>
      <button onClick={props.handleLikeImageCount}>Like Post{props.likeImageCounter}</button>
    </div>
  )
}

export default PostLikerender