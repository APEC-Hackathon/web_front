import React, { useState } from "react";
import {Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Box} from "@mui/material";
import collaborationApi from "../../api/collaborationApi";
import problemApi from "../../api/problemApi";

interface BidButtonProps {
    type: string;
    id: number | undefined;
}
const BidButton: React.FC<BidButtonProps> = ({type, id}) => {
    const [open, setOpen] = useState(false);
    const [bidAmount, setBidAmount] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setBidAmount("")
        setOpen(false);
    };

    const handleBidClick = async () => {
        try {
            if (type === "collaboration") {
                console.log("Collab created:", bidAmount);
                const bid = await collaborationApi.createCollaborationRequest(id!, bidAmount);
            }
            if (type === "problem") {
                console.log("Problem created with bid:", bidAmount);
                console.log("Problem created with id:", id!);
                const bid = await problemApi.createProblemBid(id!, bidAmount);
            }
        } catch (error) {
            console.error("Error creating bid:", error);
        }
        handleClose();
    };

    return (
        <div>
            <Button sx={{marginRight: "auto"}} variant="contained" onClick={handleOpen}>
                Place Bid
            </Button>

            <Dialog fullWidth={true} maxWidth={"lg"} open={open} onClose={handleClose}>
                <DialogTitle>Enter Bid Details</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        marginTop: 2,
                        marginBottom: 2,
                    }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        id="outlined-textarea"
                        label="Bid Commitment"
                        placeholder="What can you commit?"
                        multiline
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                    />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleBidClick}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BidButton;
