import React, {useEffect} from "react";
import {Grid, Button, Box, Typography, Stack} from "@mui/material";
import InfiniteScroll from 'react-infinite-scroller';
import {Problem} from "../../client";
import problemApi from "../../api/problemApi";
import ProblemCard from "../../components/marketplace/ProblemCard";
import MarketPlaceSearchBar from "../../components/marketplace/MarketPlaceSearchBar";
import CreateProblemButton from "../../components/marketplace/CreateProblemButton";

const MarketplaceProblemsPage = () => {
    const [problems, setUsers] = React.useState<Problem[]>([]);
    const [reloadCount, setReloadCount] = React.useState<number>(0);
    const [hasMore, setHasMore] = React.useState<boolean>(true);
    const fetchCompanies = async () => {
        try {
            if (reloadCount > 10) {
                setHasMore(false);
                return;
            }
            // To change to retrieve a limit of 10
            const moreProblems = await problemApi.getAllProblems()
            setUsers([...problems, ...moreProblems]);
            setReloadCount((reloadCount) => reloadCount + 1);
        } catch (error) {
            console.error("Error fetching user problems:", error);
        }
    };

    return (
        <Box>
            <Stack direction="row" alignItems="center">
                <MarketPlaceSearchBar type={"problem"}/>
                <CreateProblemButton/>
            </Stack>
            <InfiniteScroll
                pageStart={0}
                loadMore={fetchCompanies}
                hasMore={hasMore}
                loader={
                    <div className="loader" key="loader">
                        Loading ...
                    </div>
                }
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {problems!.map((problem) => (<ProblemCard problemId={problem.id!}/>))}
                </Grid>
                {!hasMore && (
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                        <Typography variant="h6" component="div" gutterBottom>
                            That's all folks!
                        </Typography>
                    </Box>
                )
                }
            </InfiniteScroll>

        </Box>
    )
};

export default MarketplaceProblemsPage;
