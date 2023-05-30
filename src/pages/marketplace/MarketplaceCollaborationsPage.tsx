import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import { Collaboration } from "../../client";
import collaborationApi from "../../api/collaborationApi";
import CollaborationCard from "../../components/marketplace/CollaborationCard";
import MarketPlaceSearchBar from "../../components/marketplace/MarketPlaceSearchBar";
import CreateCollaborationButton from "../../components/marketplace/CreateCollaborationButton";

const MarketplaceCollaborationsPage = () => {
  const [collaborations, setCollaborations] = React.useState<Collaboration[]>([]);
  const [reloadCount, setReloadCount] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const fetchCollaborations = async () => {
    try {
      if (reloadCount > 10) {
        setHasMore(false);
        return;
      }
      // Change to retrieve a limit of 10
      const moreCollaborations = await collaborationApi.getAllCollaborations();
      setCollaborations([...collaborations, ...moreCollaborations]);
      setReloadCount((reloadCount) => reloadCount + 1);
    } catch (error) {
      console.error("Error fetching collaborations:", error);
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <MarketPlaceSearchBar type={"collaboration"} />
        <CreateCollaborationButton />
      </Stack>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchCollaborations}
        hasMore={hasMore}
        loader={
          <div className="loader" key="loader">
            Loading ...
          </div>
        }
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {collaborations.map((collaboration) => (
            <Grid item key={collaboration.id} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ height: "100%" }}>
                <CollaborationCard collaboration={collaboration} />
              </Box>
            </Grid>
          ))}
        </Grid>
        {!hasMore && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}
          >
            <Typography variant="h6" component="div" gutterBottom>
              That's all folks!
            </Typography>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  );
};

export default MarketplaceCollaborationsPage;
