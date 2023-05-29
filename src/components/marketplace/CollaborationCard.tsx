import {
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Collaboration} from "../../client";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import collaborationApi from "../../api/collaborationApi";

interface CollaborationCardProps {
    collaborationId: number | null
}

const CollaborationCard = ({collaborationId}: CollaborationCardProps) => {
    const [collaboration, setCollaboration] = useState<Collaboration | null>(null);

    useEffect(() => {
        const fetchCollaboration = async () => {
            try {
                if (collaborationId) {
                    const collaboration1 = await collaborationApi.getCollaborationById(collaborationId); // Parse id as a number
                    setCollaboration(collaboration1);
                }
            } catch (error) {
                console.error('Error fetching collaboration:', error);
            }
        };

        fetchCollaboration();
    }, [collaborationId]);

    const navigate = useNavigate();

    const handleConnectClick = () => {

    }

    const handleProfileClick = () => {
        navigate(`/marketplace/collaboration/${collaborationId}`)
    }
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={collaboration?.title ? collaboration.title : "Collaboration Title"}
            />
            <Button onClick={handleProfileClick}>
                <CardMedia
                    component="img"
                    height="194"
                    image={collaboration?.image_url ? collaboration.image_url : "https://mui.com/static/images/cards/paella.jpg"}
                    alt={collaboration?.title}
                />
            </Button>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {collaboration?.description ? collaboration.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <IconButton aria-label="connect" onClick={handleConnectClick}>
                    <ConnectWithoutContactIcon/>
                </IconButton>
            </CardActions>
        </Card>

    );
};

export default CollaborationCard;
