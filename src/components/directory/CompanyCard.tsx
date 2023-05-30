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
import {User} from "../../client";
import {useEffect, useState} from "react";
import userApi from "../../api/userApi";
import {useNavigate} from "react-router-dom";
import ChatStartButton from "../chat/ChatStartButton";

import './CompanyCard.css'

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

    const handleProfileClick = () => {
        navigate(`/profile/${companyId}`)
    }
    return (
        <Card className='company-card'>
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
                    image={company?.avatar_url ? "https://picsum.photos/1920/1080?img=1" : 'https://picsum.photos/1920/1080?img=1'}
                    alt={company?.organization_name}
                />
            </Button>
            <CardContent sx={{ height: 120, overflow: 'hidden' }}>
                <Typography variant="body2" color="text.secondary">
                    {company?.organization_description ? company.organization_description : ""}
                </Typography>
            </CardContent>
            <div className="card-icons">
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <ChatStartButton userId={companyId!}/>
            </CardActions>
            </div>
        </Card>

    );
};

export default CompanyCard;
