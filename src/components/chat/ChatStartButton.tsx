import {Button, IconButton} from "@mui/material";
import Forum from "@mui/icons-material/Forum";
import {useNavigate} from "react-router-dom";

interface ChatStartButtonProps {
    userId: number | undefined
}

const ChatStartButton = ({ userId }: ChatStartButtonProps) => {

    const navigate = useNavigate();
    const handleConnectClick = () => {
        navigate(`/chat/${userId}`);
    }

  return (
        <Button>
            <IconButton aria-label="chat" onClick={handleConnectClick}>
                <Forum/>
            </IconButton>
        </Button>
  );
};

export default ChatStartButton;
