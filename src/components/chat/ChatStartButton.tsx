import {Button, IconButton} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const ChatStartButton = () => {
    const handleConnectClick = () => {

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
