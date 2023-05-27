import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from "@mui/material";
import { styled } from "@mui/system";

interface ProjectType {
    id: string;
    image: string;
    name: string;
    country: string;
}

const ProjectCard = styled(Card)({
    backgroundColor: "#87c0cd",
    color: "#113f67",
});

const ProjectImage = styled(CardMedia)({
    paddingTop: "100%", // 1:1 aspect ratio
});

const Project = ({ project, link }: { project: ProjectType; link: string }) => (
    <ProjectCard>
        <CardActionArea href={link}>
            <ProjectImage image={project.image} />
            <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="subtitle1">{project.country}</Typography>
            </CardContent>
        </CardActionArea>
    </ProjectCard>
);

export default Project;
