import React from "react";
import {Grid, Box, Typography} from "@mui/material";
import InfiniteScroll from 'react-infinite-scroller';
import CompanyCard from "../../components/directory/CompanyCard";
import userApi from "../../api/userApi";
import {User} from "../../client";

const DirectoryPage = () => {
    const [users, setUsers] = React.useState<User[]>([]);
    const [reloadCount, setReloadCount] = React.useState<number>(0);
    const [hasMore, setHasMore] = React.useState<boolean>(true);
    const fetchCompanies = async () => {
        try {
            if (reloadCount > 10) {
              setHasMore(false);
              return;
            }
            // To change to retrieve a limit of 10
            const moreUsers = await userApi.getAllUsers()
            setUsers([...users, ...moreUsers]);
            setReloadCount((reloadCount) => reloadCount + 1);
        } catch (error) {
            console.error("Error fetching user problems:", error);
        }
    };

    return (
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
                {users!.map((user) => (<CompanyCard companyId={user.id!}/>))}
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
    )
};

export default DirectoryPage;
