import React, { useState } from "react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const BidButton = () => {
    const [open, setOpen] = useState(false);
    const [bidAmount, setBidAmount] = useState("");
    const [item, setItem] = useState("");
    const [cost, setCost] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBidClick = () => {
        // Handle bid button click and submit bid data
        console.log("Bid Amount:", bidAmount);
        console.log("Item:", item);
        console.log("Cost:", cost);
        handleClose();
    };

    return (
        <div>
            <Button sx={{mr: "0"}} variant="contained" onClick={handleOpen}>
                Place Bid
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Bid Details</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Bid Amount"
                        variant="outlined"
                        type="number"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                    />
                    <TextField
                        label="Item"
                        variant="outlined"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <TextField
                        label="Cost"
                        variant="outlined"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
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
