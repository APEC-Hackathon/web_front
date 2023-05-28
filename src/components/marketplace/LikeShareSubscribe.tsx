import React, {useState} from "react";
import { Button, ButtonGroup } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const LikeShareSubscribe = () => {
    const [liked, setLiked] = useState<boolean>(false);
    const [subscribed, setSubscribed] = useState<boolean>(false);


    const handleShareClick = () => {
        // Handle share button click
    };

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const handleSubscribeClick = () => {
        // Handle subscribe button click
    };

    return (
        <div>
            <ButtonGroup sx={{ pb: "10px"}}>
                <Button variant="outlined" onClick={handleShareClick} startIcon={<ShareIcon />}>
                    Share
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleLikeClick}
                    startIcon={liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
                >
                    Like
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleSubscribeClick}
                    startIcon={liked ? <TurnedInIcon /> : <TurnedInNotIcon />}
                >
                    Subscribe
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default LikeShareSubscribe;
