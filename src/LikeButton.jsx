import './LikeButton.css'
import { FaHeart } from "react-icons/fa"

function LikeButton(props) {
    return (props.likeTrigger) ? (
        <div className='popup'>
            Liked
            <FaHeart></FaHeart>
        </div>
    ) : (<div className='popup'>
    Like
    <FaHeart></FaHeart>
</div>);
}

export default LikeButton;