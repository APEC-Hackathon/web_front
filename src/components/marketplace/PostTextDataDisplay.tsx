import {Collaboration, Problem} from "../../client";
import LikeShareSubscribe from "./LikeShareSubscribe";
import BidButton from "./BidButton";

interface PostTextDataDisplayProps {
  postData: Collaboration | Problem | null
}

const PostTextDataDisplay = ({postData}: PostTextDataDisplayProps) => {
  return (
    <div>
        PostTextDataDisplay
        <LikeShareSubscribe/>
        <BidButton/>
    </div>
  );
};

export default PostTextDataDisplay;
