import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeHOCimage from './components/LikeHOCimage';
import LikeHOCpost from './components/LikeHOCpost';
import WrappedHOC from './components/WrappedHOC';
import Wrapped from './components/Wrapped';
import Common from './render/Common';
import ImageLikerender from './render/ImageLikerender';
import PostLikerender from './render/PostLikerender';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      {/* <div className='buttons'>
        <LikePost/>
        <LikeImage/>
        
      </div> */}
      <div className='buttons'>
{/*         
          <LikeHOCimage /> // with hoc
        
        
          <LikeHOCpost /> */}

          <Common render={ImageLikerender}/> {/* with render props */}
          <Common render={PostLikerender}/>
    
      </div>
    </div>
  );
}

export default App;
