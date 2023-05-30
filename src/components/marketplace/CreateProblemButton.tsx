import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";



const CreateProblemButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/marketplace/problem/create`)
  };

  return (
    <Button onClick={handleClick}>
        Create Problem
    </Button>
  );
};

export default CreateProblemButton;
