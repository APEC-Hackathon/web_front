import {Problem} from "../../client";
import React, {useEffect, useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import problemApi from "../../api/problemApi";
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

interface CompanyProblemsProps {
    userId: number
}

const CompanyProblems = ({userId}: CompanyProblemsProps) => {
    const [problems, setProblems] = useState<Problem[] | null>(null);

    useEffect(() => {
        const fetchCompanyProblems = async () => {
            try {
                // To change to retrieve a company's problems
                const problems = await problemApi.getAllProblems()
                setProblems(problems);
            } catch (error) {
                console.error("Error fetching user problems:", error);
            }
        };

        fetchCompanyProblems();
    }, [userId]);

    return (
        <Paper>
            <ImageList sx={{ width: 500, height: 450 }}>
                {problems!.map((problem) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label={problem.title}>
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={problem.title}
                            subheader={problem.bid_deadline}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={`https://picsum.photos/1920/1080?img=${problem.id}`}
                            alt={problem.title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {problem.description}
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

export default CompanyProblems;
