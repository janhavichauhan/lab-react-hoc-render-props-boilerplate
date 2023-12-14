import WrappedHOC from "./WrappedHOC";

import React from 'react'

function LikeHOCimage(props) {
  return (
    <div>
        <button onClick={props.handleLikeImageCount}>Like Image {props.likeImageCounter}</button>{/* passing two properties effectively */}
    </div>
  )
}

export default  WrappedHOC(LikeHOCimage) //here likeHOCimage is passed as argument to get additional props
                                        //props are used to access and utilise the properties