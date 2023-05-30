import React from "react";
import {Typography, Container, Paper, Stack, Box} from "@mui/material";
import {User} from "../../client";
import ChatStartButton from "../chat/ChatStartButton";

interface CompanyTextDataDisplayProps {
    userData: User | null;
}

const CompanyTextDataDisplay: React.FC<CompanyTextDataDisplayProps> = ({ userData}) => {
    if (!userData) {
        return null;
    }

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
                            Company Name:
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{pb: "12px"}}>
                            {userData.organization_name ? userData.organization_name : "Lorum Ipsum"}
                        </Typography>
                        <Typography variant="h4" gutterBottom sx={{fontWeight: "bold"}}>
                            Company Description:
                        </Typography>
                        <Typography variant="body1" sx={{pb: "12px"}}>
                            {userData.organization_description ? userData.organization_description : "Lorum Ipsum"}
                        </Typography>
                    </Box>
                    <Stack sx={{pt: "12px", pb: "12px", pr: "6px"}}>
                        <ChatStartButton userId={userData.id}/>
                    </Stack>
                </Stack>
            </Paper>
        </Container>
    );
};

export default CompanyTextDataDisplay;
