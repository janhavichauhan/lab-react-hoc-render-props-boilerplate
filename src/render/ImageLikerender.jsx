import React from "react";


const ImageLikerender = (props) => {
  return (
    <div>
        <button onClick={props.handleLikeImageCount}> Like Image {props.likeImageCounter}</button>
    </div>
  )
}

export default ImageLikerender