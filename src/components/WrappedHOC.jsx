
import { useState } from "react";

const WrappedHOC = (WrappedFunction) => { //takes a component as an argument because it wraps around the component with additional features
    function WrappedHOC() {
        const [likeImageCounter, setLikeImageCounter] = useState(0);

        const handleLikeImageCount = () => {
            setLikeImageCounter(likeImageCounter + 1);
        }
       
        return (
            <div>
                <WrappedFunction likeImageCounter={likeImageCounter} handleLikeImageCount={handleLikeImageCount} />
            </div>
        );
    }

    return WrappedHOC; 
}

export default WrappedHOC;
