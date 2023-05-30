import React, { useEffect, useState } from "react";
import {Avatar, Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import {Problem} from "../../client";
import {useNavigate} from "react-router-dom";
import problemApi from "../../api/problemApi";

interface CollaborationSourceProps {
    sourceId: number | undefined
}

const CollaborationSource = ({ sourceId }: CollaborationSourceProps) => {
    const [problem, setProblem] = useState<Problem | null>(null);

    const navigate = useNavigate();
    const handleClickViewSource = async () => {
        navigate('/marketplace/problem/' + problem?.id);
    };

    useEffect(() => {
        if (!sourceId) {
            return;
        }
        const fetchCompanyDetails = async () => {
            try {
                const problem = await problemApi.getProblemById(sourceId)
                setProblem(problem);
            } catch (error) {
                console.error("Error fetching collaboration or problem details:", error);
            }
        };

        fetchCompanyDetails();
    }, [sourceId]);

    if (!problem) {
        return <div>Loading source details...</div>;
    }

    return (
        <div>
            <Container
                sx={{ mt: 5, width: "120%" }}
                disableGutters={true}
                maxWidth="lg"
            >
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Stack>
                                <Box>
                                    <Typography variant="h4" sx={{fontWeight: "bold"}}>
                                        Collaboration Source
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack direction="column" justifyContent="space-between">
                                <Stack direction="row" sx={{pt: "16px"}} alignItems="top">
                                    <Box sx={{pr: "16px"}}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Box>
                                    <Box>
                                        <Box sx={{display: 'flex', flexDirection: "row"}}>
                                            <Typography variant="h5" sx={{fontWeight: "bold"}}>
                                                Problem Title:
                                            </Typography>
                                            <Typography variant="h5" sx={{pl: "10px"}}>
                                                {problem.title ? problem.title : "No problem title"}
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: "row"}}>
                                            <Typography variant="h5" sx={{fontWeight: "bold"}}>
                                                Description:
                                            </Typography>
                                            <Typography variant="h5" sx={{pl: "10px"}}>
                                                {problem.description ? problem.description : "No company description"}
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: "row"}}>
                                            <Typography variant="h5" sx={{fontWeight: "bold"}}>
                                                Bid Deadline:
                                            </Typography>
                                            <Typography variant="h5" sx={{pl: "10px"}}>
                                                {problem.bid_deadline ? problem.bid_deadline : "No bid deadline"}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box sx={{pr: "6px"}}>
                            <Button variant="contained" onClick={handleClickViewSource}>
                                View Source
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </div>
    );
};

export default CollaborationSource;
