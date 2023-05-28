import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const LikeShareSubscribe = () => {
    const handleShareClick = () => {
        // Handle share button click
    };

    const handleLikeClick = () => {
        // Handle like button click
    };

    const handleSubscribeClick = () => {
        // Handle subscribe button click
    };

    return (
        <div>
            <ButtonGroup>
                <Button variant="outlined" onClick={handleShareClick}>
                    Share
                </Button>
                <Button variant="outlined" onClick={handleLikeClick}>
                    Like
                </Button>
                <Button variant="outlined" onClick={handleSubscribeClick}>
                    Subscribe
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default LikeShareSubscribe;
