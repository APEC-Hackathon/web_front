import { Container, InputAdornment, TextField, Card, CardContent } from "@mui/material";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import collaborationApi from "../../api/collaborationApi";
import problemApi from "../../api/problemApi";
import { Collaboration, Problem } from "../../client";
import { useNavigate } from "react-router-dom";

interface BasicSearchBarProps {
    type: "collaboration" | "problem" | null;
}

const BasicSearchBar: React.FC<BasicSearchBarProps> = ({ type }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState<Collaboration[] | Problem[]>([]);
    const [myData, setMyData] = useState<Collaboration[] | Problem[]>([]);
    const fetchData = useCallback(
        type === "collaboration" ? collaborationApi.getMyCollaborations : problemApi.getMyProblems,
        [type]
    );
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const fetchFilteredData = async () => {
            try {
                console.log(localStorage.getItem("token"));
                const data = await fetchData();
                setMyData(data);
                setFilteredData(data);
            } catch (error) {
                console.error(`Error fetching ${type}:`, error);
            }
        };

        fetchFilteredData();
    }, [type, fetchData]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        if (searchTerm === "") {
            setFilteredData(myData);
            setShowSuggestions(false);
        } else {
            // @ts-ignore
            const filteredData = myData.filter((data: Collaboration | Problem) =>
                (data.title || "").toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filteredData);
            setShowSuggestions(true);
        }
    };

    const navigate = useNavigate();
    const handleCardClick = (item: Collaboration | Problem) => {
        // Handle the click event for the card
        // For example, you can navigate to the collaboration/problem details page
        // using the item id or perform any other action
        console.log("Clicked on item:", item);
        navigate(`/marketplace/${type}/${item.id}`)
    };

    return (
        <Container maxWidth="md" sx={{ mt: 20 }}>
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: 600 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            {showSuggestions && (
                <div>
                    {filteredData.map((item) => (
                        <Card key={item.id} onClick={() => handleCardClick(item)}>
                            <CardContent>
                                <p>Title: {item.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default BasicSearchBar;
