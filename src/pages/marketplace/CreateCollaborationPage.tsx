import {Box, TextField} from "@mui/material";
import React, {useState} from "react";
import collaborationApi from "../../api/collaborationApi";
import {useNavigate} from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";


const CreateCollaborationPage = () => {
    const [loading, setLoading] = useState(false);
    const [titleMt, setTitleMt] = React.useState<boolean>(false);
    const [descriptionMt, setDescriptionMt] = React.useState<boolean>(false);
    const [sourceMt, setSourceMt] = React.useState<boolean>(false);
    const [imageMt, setImageMt] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        const title = data.get('title')?.toString().trim() || '';
        const sourceId = parseInt(data.get('sourceId')!.toString()) || -1;
        const description = data.get('description')?.toString().trim() || '';
        const image = data.get('image')?.toString().trim() || '';

        if (title === '') {
            setTitleMt(true)
        }
        if (description === '') {
            setDescriptionMt(true);
        }
        if (sourceId === -1) {
            setSourceMt(true);
        }
        if (image === '') {
            setImageMt(true);
        }

        setLoading(true);

        try {
            await collaborationApi.createCollaboration(title, description, sourceId, image);
            setLoading(false);
            navigate('/marketplace/collaborations');
        } catch (err: any) {
            setLoading(false);
        }
    };

    return (
        <Box
            component='form'
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
            noValidate
        >
            <TextField
                error={titleMt}
                required
                id="title-required"
                label="Title"
                helperText="The title of your collaboration"
            />
            <TextField
                error={descriptionMt}
                required
                id="desc-required"
                label="Description"
                multiline
                maxRows={4}
                helperText="The description of your collaboration"
            />
            <TextField
                error={sourceMt}
                required
                type="number"
                id="desc-required"
                label="Source ID"
                multiline
                maxRows={4}
                helperText="The ID of the problem"
            />
            <TextField
                error={imageMt}
                required
                id="image-required"
                label="Image URL"
                helperText="The image of your collaboration"
            />
            <LoadingButton
                sx={{ mt: 3, mb: 2 }}
                variant='outlined'
                fullWidth
                color='success'
                type='submit'
                loading={loading}
            >
                Create Collaboration
            </LoadingButton>
        </Box>
    )
};

export default CreateCollaborationPage;
