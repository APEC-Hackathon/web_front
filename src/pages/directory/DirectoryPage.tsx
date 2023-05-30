import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroller';
import CompanyCard from "../../components/directory/CompanyCard";
import userApi from "../../api/userApi";
import { User } from "../../client";

const DirectoryPage = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [reloadCount, setReloadCount] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      if (reloadCount > 10) {
        setHasMore(false);
        return;
      }
      
      // Retrieve a limit of 10 users
      const moreUsers = await userApi.getAllUsers();
      setUsers([...users, ...moreUsers]);
      setReloadCount((reloadCount) => reloadCount + 1);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchUsers}
      hasMore={hasMore}
      loader={
        <div className="loader" key="loader">
          Loading ...
        </div>
      }
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0.5, md: 1 }}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ height: "100%" }}>
              <CompanyCard companyId={user.id ?? null} />
            </Box>
          </Grid>
        ))}
      </Grid>
      {!hasMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
          <Typography variant="h6" component="div" gutterBottom>
            That's all folks!
          </Typography>
        </Box>
      )}
    </InfiniteScroll>
  );
};

export default DirectoryPage;
