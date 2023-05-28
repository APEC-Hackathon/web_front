import {TextField, Autocomplete, Box, Stack} from "@mui/material";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import collaborationApi from "../../api/collaborationApi";
import problemApi from "../../api/problemApi";
import { Collaboration, Problem } from "../../client";
import {useNavigate} from "react-router-dom";

interface BasicSearchBarProps {
    type: "collaboration" | "problem" | null;
}

const BasicSearchBar: React.FC<BasicSearchBarProps> = ({ type }) => {
    const [myData, setMyData] = useState<Collaboration[] | Problem[]>([]);
    const fetchData = useCallback(
        type === "collaboration" ? collaborationApi.getMyCollaborations : problemApi.getMyProblems,
        [type]
    );

    useEffect(() => {
        const fetchFilteredData = async () => {
            try {
                console.log(localStorage.getItem("token"));
                const data = await fetchData();
                setMyData(data);
            } catch (error) {
                console.error(`Error fetching ${type}:`, error);
            }
        };

        fetchFilteredData();
    }, [fetchData]);

    const navigate = useNavigate();
    const handleCardClick = (item: Collaboration | Problem) => {
        // Handle the click event for the card
        // For example, you can navigate to the collaboration/problem details page
        // using the item id or perform any other action
        console.log("Clicked on item:", item);
        navigate(`/marketplace/${type}/${item.id}`)
    };

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: "100%", pb: "1rem" }}
            options={myData}
            autoHighlight
            getOptionLabel={(option) => option.description!}
            renderOption={(props, option) => (
                <Stack
                    component="li"
                    sx ={{display: 'flex'}}
                    onClick={() => handleCardClick(option)}
                    {...props}>
                    {/*<img*/}
                    {/*    loading="lazy"*/}
                    {/*    width="20"*/}
                    {/*    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}*/}
                    {/*    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}*/}
                    {/*    alt=""*/}
                    {/*/>*/}
                    <Box fontWeight="bold">
                        Title: {option.title}
                    </Box>
                    <Box>
                        Description: {option.description}
                    </Box>
                </Stack>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={`Search for a ${type}`}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
};

export default BasicSearchBar;
