import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CreateCollaborationButton = () => {
    const navigate = useNavigate();
  const handleClick = () => {
      navigate(`/marketplace/collaboration/create`)
  }
  return (
    <Button onClick={handleClick}>
        Create Collaboration
    </Button>
  );
};

export default CreateCollaborationButton;
