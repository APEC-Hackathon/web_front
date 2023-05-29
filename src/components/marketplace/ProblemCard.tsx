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
import {Problem} from "../../client";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import problemApi from "../../api/problemApi";

interface ProblemCardProps {
    problemId: number | null
}

const ProblemCard = ({problemId}: ProblemCardProps) => {
    const [problem, setProblem] = useState<Problem | null>(null);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                if (problemId) {
                    const problem1 = await problemApi.getProblemById(problemId); // Parse id as a number
                    setProblem(problem1);
                }
            } catch (error) {
                console.error('Error fetching problem:', error);
            }
        };

        fetchProblem();
    }, [problemId]);

    const navigate = useNavigate();

    const handleConnectClick = () => {

    }

    const handleProfileClick = () => {
        navigate(`/marketplace/problem/${problemId}`)
    }
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={problem?.title ? problem.title : "Problem Title"}
            />
            <Button onClick={handleProfileClick}>
                <CardMedia
                    component="img"
                    height="194"
                    image={problem?.image_url ? `https://picsum.photos/1920/1080?img=${problemId}` : `https://picsum.photos/1920/1080?img=${problemId}`}
                    alt={problem?.title}
                />
            </Button>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {problem?.description ? problem.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
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

export default ProblemCard;
