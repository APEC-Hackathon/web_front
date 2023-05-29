import {Collaboration} from "../../client";
import React, {useEffect, useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import collaborationApi from "../../api/collaborationApi";
import {
    Avatar,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    ImageList,
    Paper,
    Typography
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CompanyCollaborationsProps {
    userId: number
}

const CompanyCollaborations = ({userId}: CompanyCollaborationsProps) => {
    const [collaborations, setCollaborations] = useState<Collaboration[] | null>(null);

    useEffect(() => {
        const fetchCompanyCollaborations = async () => {
            try {
                // To change to retrieve a company's Collaborations
                const Collaborations = await collaborationApi.getAllCollaborations()
                setCollaborations(Collaborations);
            } catch (error) {
                console.error("Error fetching user Collaborations:", error);
            }
        };

        fetchCompanyCollaborations();
    }, [userId]);

    return (
        <Paper>
            <ImageList sx={{ width: 500, height: 450 }}>
                {collaborations!.map((collaboration) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label={collaboration.title}>
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={collaboration.title}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={`https://picsum.photos/1920/1080?img=${collaboration.id}`}
                            alt={collaboration.title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {collaboration.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
            </ImageList>

        </Paper>
    )
};

export default CompanyCollaborations;
