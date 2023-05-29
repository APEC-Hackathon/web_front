import React, {useEffect} from "react";
import {Grid, Button, Box, Typography} from "@mui/material";
import InfiniteScroll from 'react-infinite-scroller';
import {Collaboration} from "../../client";
import collaborationApi from "../../api/collaborationApi";
import CollaborationCard from "../../components/marketplace/CollaborationCard";
import MarketPlaceSearchBar from "../../components/marketplace/MarketPlaceSearchBar";

const MarketplaceCollaborationsPage = () => {
    const [collaborations, setUsers] = React.useState<Collaboration[]>([]);
    const [reloadCount, setReloadCount] = React.useState<number>(0);
    const [hasMore, setHasMore] = React.useState<boolean>(true);
    const fetchCompanies = async () => {
        try {
            if (reloadCount > 10) {
                setHasMore(false);
                return;
            }
            // To change to retrieve a limit of 10
            const moreCollaborations = await collaborationApi.getAllCollaborations()
            setUsers([...collaborations, ...moreCollaborations]);
            setReloadCount((reloadCount) => reloadCount + 1);
        } catch (error) {
            console.error("Error fetching user problems:", error);
        }
    };

    return (
        <Box>
            <MarketPlaceSearchBar type={"collaboration"}/>
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
                    {collaborations!.map((collaboration) => (<CollaborationCard collaborationId={collaboration.id!}/>))}
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

export default MarketplaceCollaborationsPage;
