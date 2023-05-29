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
import {User} from "../../client";
import {useEffect, useState} from "react";
import userApi from "../../api/userApi";
import {useNavigate} from "react-router-dom";

interface CompanyCardProps {
    companyId: number | null
}

const CompanyCard = ({companyId}: CompanyCardProps) => {
    const [company, setCompany] = useState<User | null>(null);

    useEffect(() => {
        const fetchCollaboration = async () => {
            try {
                if (companyId) {
                    const user = await userApi.getUserById(companyId); // Parse id as a number
                    setCompany(user);
                }
            } catch (error) {
                console.error('Error fetching collaboration:', error);
            }
        };

        fetchCollaboration();
    }, [companyId]);

    const navigate = useNavigate();

    const handleConnectClick = () => {

    }

    const handleProfileClick = () => {
        navigate(`/profile/${companyId}`)
    }
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={company?.organization_name ? company.organization_name : "Organization Name"}
            />
            <Button onClick={handleProfileClick}>
                <CardMedia
                    component="img"
                    height="194"
                    image={company?.avatar_url ? company.avatar_url : "https://mui.com/static/images/cards/paella.jpg"}
                    alt={company?.organization_name}
                />
            </Button>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {company?.organization_description ? company.organization_description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
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

export default CompanyCard;
