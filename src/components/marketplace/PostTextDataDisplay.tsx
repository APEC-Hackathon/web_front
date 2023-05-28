import React from "react";
import { Typography, Container, Paper } from "@mui/material";
import { Collaboration, Problem } from "../../client";
import LikeShareSubscribe from "./LikeShareSubscribe";
import BidButton from "./BidButton";

interface PostTextDataDisplayProps {
    postData: Collaboration | Problem | null;
}

const PostTextDataDisplay: React.FC<PostTextDataDisplayProps> = ({ postData }) => {
    if (!postData) {
        return null;
    }

    const { title, description } = postData;

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
            </Paper>
            <LikeShareSubscribe />
            <BidButton />
        </Container>
    );
};

export default PostTextDataDisplay;
