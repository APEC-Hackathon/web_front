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
import { Collaboration } from "../../client";
import { useNavigate } from "react-router-dom";
import collaborationApi from "../../api/collaborationApi";

import "./ProblemCard";

interface CollaborationCardProps {
  collaboration: Collaboration;
}

const CollaborationCard = ({ collaboration }: CollaborationCardProps) => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    // Handle connect click
  };

  const handleProfileClick = () => {
    navigate(`/marketplace/collaboration/${collaboration.id}`);
  };

  return (
    <Card className="collaboration-card">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={collaboration.title ? collaboration.title : "Collaboration Title"}
      />
      <Button onClick={handleProfileClick}>
        <CardMedia
          component="img"
          height="194"
          image={
            collaboration.image_url
              ? collaboration.image_url
              : "https://mui.com/static/images/cards/paella.jpg"
          }
          alt={collaboration.title}
        />
      </Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {collaboration.description
            ? collaboration.description
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

export default CollaborationCard;
