// ProblemCard.tsx

import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Problem } from "../../client";
import { useNavigate } from "react-router-dom";

import "./ProblemCard.css"; 

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard = ({ problem }: ProblemCardProps) => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    // Handle connect click
  };

  const handleProfileClick = () => {
    navigate(`/marketplace/problem/${problem.id}`);
  };

  return (
    <Card className="problem-card">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={problem.title ? problem.title : "Problem Title"}
      />
      <Button onClick={handleProfileClick}>
        <CardMedia
          component="img"
          height="194"
          image={
            problem.image_url
              ? problem.image_url
              : "https://mui.com/static/images/cards/paella.jpg"
          }
          alt={problem.title}
        />
      </Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {problem.description
            ? problem.description
            : ""}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="connect" onClick={handleConnectClick}>
          <ConnectWithoutContactIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProblemCard;
