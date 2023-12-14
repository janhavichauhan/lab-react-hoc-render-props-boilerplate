
import WrappedHOC from "./WrappedHOC";

function LikeHOCpost(props) {
  return (
    <div>
      <button onClick={props.handleLikeImageCount}>Like Post {props.likeImageCounter}</button>
    </div>
  );
}

export default WrappedHOC(LikeHOCpost); //Wrapped is used for reusability of the code as it is sharing common functionality
