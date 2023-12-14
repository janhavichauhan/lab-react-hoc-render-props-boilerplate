import React , { useState } from "react";

function Common (props)  {
    const [likeImageCounter, setLikeImageCounter] = useState(0);

    const handleLikeImageCount = ()=>{
        setLikeImageCounter(likeImageCounter+1);
    }
  return (
    <div>
        {props.render({likeImageCounter,handleLikeImageCount})}
    </div>
  )
}

export default Common