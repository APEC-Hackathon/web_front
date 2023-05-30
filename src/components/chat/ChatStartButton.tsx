import {Button, IconButton} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
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
            <IconButton aria-label="connect" onClick={handleConnectClick}>
                <ConnectWithoutContactIcon/>
            </IconButton>
        </Button>
  );
};

export default ChatStartButton;
