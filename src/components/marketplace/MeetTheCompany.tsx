import React, { useEffect, useState } from "react";
import {Avatar, Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import userApi from "../../api/userApi";
import {User} from "../../client";
import {useNavigate} from "react-router-dom";

interface MeetTheCompanyProps {
    companyId: number | undefined
}

const MeetTheCompany = ({ companyId }: MeetTheCompanyProps) => {
    const [company, setCompany] = useState<User | null>(null);

    const navigate = useNavigate();
    const handleClickViewCompany = async () => {
        navigate('/profile/' + companyId);
    };

    useEffect(() => {
        if (!companyId) {
            return;
        }
        const fetchCompanyDetails = async () => {
            try {
                const user = await userApi.getUserById(companyId)
                setCompany(user);
            } catch (error) {
                console.error("Error fetching company details:", error);
            }
        };

        fetchCompanyDetails();
    }, [companyId]);

    if (!company) {
        return <div>Loading company details...</div>;
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
                                Meet the company!
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
                                        Company:
                                    </Typography>
                                    <Typography variant="h5" sx={{pl: "10px"}}>
                                        {company.organization_name ? company.organization_name : "No company name"}
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: "row"}}>
                                    <Typography variant="h5" sx={{fontWeight: "bold"}}>
                                        Description:
                                    </Typography>
                                    <Typography variant="h5" sx={{pl: "10px"}}>
                                        {company.organization_description ? company.organization_description : "No company description"}
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: "row"}}>
                                    <Typography variant="h5" sx={{fontWeight: "bold"}}>
                                        Location
                                    </Typography>
                                    <Typography variant="h5" sx={{pl: "10px"}}>
                                        {company.country ? company.country : "No company location"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                    </Box>
                        <Box sx={{pr: "6px"}}>
                            <Button variant="contained" onClick={handleClickViewCompany}>
                                View Company
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </div>
    );
};

export default MeetTheCompany;
