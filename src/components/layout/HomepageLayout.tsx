import { Box, Button, Grid, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const HomepageLayout = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <Typography variant="h6">Bersam</Typography>
                <Box>
                    <Button onClick={() => navigate("/marketplace")}>
                        Marketplace
                    </Button>
                    <Button onClick={() => navigate("/collaborations")}>
                        Collaborations
                    </Button>
                </Box>
                <Box>
                    <Button onClick={() => navigate("/login")}>Login</Button>
                    <Button onClick={() => navigate("/signup")}>Sign Up</Button>
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, p: 3, width: "100%", minHeight: "100vh" }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomepageLayout;
