import React from "react";
import {Typography, Container, Paper, Stack, Box} from "@mui/material";
import { Collaboration, Problem } from "../../client";
import LikeShareSubscribe from "./LikeShareSubscribe";
import BidButton from "./BidButton";

interface PostTextDataDisplayProps {
    postData: Collaboration | Problem | null;
    type: string;
}

const PostTextDataDisplay: React.FC<PostTextDataDisplayProps> = ({ postData, type }) => {
    if (!postData) {
        return null;
    }

    const { title, description } = postData;

    return (
        <Container
            sx={{ mt: 5, width: "120%" }}
            disableGutters={true}
            maxWidth="lg"
        >
            <Paper elevation={3} sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Box sx={{pt: "12px", pb: "12px", pl: "6px"}}>
                        <Typography variant="h4" gutterBottom sx={{fontWeight: "bold"}}>
                            Title:
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{pb: "12px"}}>
                            {title}
                        </Typography>
                        <Typography variant="h4" gutterBottom sx={{fontWeight: "bold"}}>
                            Description:
                        </Typography>
                        <Typography variant="body1" sx={{pb: "12px"}}>{description}</Typography>
                    </Box>
                    <Stack sx={{pt: "12px", pb: "12px", pr: "6px"}}>
                        <LikeShareSubscribe />
                        <BidButton type={type} id={postData.id}/>
                    </Stack>
                </Stack>
            </Paper>
        </Container>
    );
};

export default PostTextDataDisplay;
