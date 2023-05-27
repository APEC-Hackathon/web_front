import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Project from "../../components/project/Project";

interface ProjectType {
    id: string;
    image: string;
    name: string;
    country: string;
}

const SectionTitle = styled(Typography)({
    color: "#113f67",
    marginBottom: "20px",
});

const SeeMoreButton = styled(Button)({
    backgroundColor: "#113f67",
    color: "#87c0cd",
    marginTop: "20px",
});

const Marketplace = () => {
    const yourProjects: ProjectType[] = [
        {
            id: "1",
            image: "https://via.placeholder.com/150",
            name: "Project 1",
            country: "Country 1",
        },
        {
            id: "1",
            image: "https://via.placeholder.com/150",
            name: "Project 1",
            country: "Country 1",
        },
        // Add more projects...
    ];

    const trendingProjects: ProjectType[] = [
        {
            id: "1",
            image: "https://via.placeholder.com/150",
            name: "Trending Project 1",
            country: "Country 1",
        },
        {
            id: "1",
            image: "https://via.placeholder.com/150",
            name: "Trending Project 1",
            country: "Country 1",
        },
        {
            id: "1",
            image: "https://via.placeholder.com/150",
            name: "Trending Project 1",
            country: "Country 1",
        },
        // Add more projects...
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SectionTitle variant="h4">Your Projects</SectionTitle>
                    <Grid container spacing={2}>
                        {yourProjects.map((project: ProjectType) => (
                            <Grid item xs={6} sm={4} key={project.id}>
                                <Project project={project} />
                            </Grid>
                        ))}
                    </Grid>
                    <SeeMoreButton>See More</SeeMoreButton>
                </Grid>

                <Grid item xs={12}>
                    <SectionTitle variant="h4">
                        Trending Projects For You
                    </SectionTitle>
                    <Grid container spacing={2}>
                        {trendingProjects.map((project: ProjectType) => (
                            <Grid item xs={6} sm={4} key={project.id}>
                                <Project project={project} />
                            </Grid>
                        ))}
                    </Grid>
                    <SeeMoreButton>See More</SeeMoreButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Marketplace;
