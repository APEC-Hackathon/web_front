import {Box, Stack, TextField} from "@mui/material";
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, {useState} from "react";
import problemApi from "../../api/problemApi";
import {useNavigate} from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";


const CreateProblemPage = () => {
    const [loading, setLoading] = useState(false);
    const [titleMt, setTitleMt] = React.useState<boolean>(false);
    const [descriptionMt, setDescriptionMt] = React.useState<boolean>(false);
    const [imageMt, setImageMt] = React.useState<boolean>(false);
    const [bidDeadline, setBidDeadline] = React.useState<Dayjs | null>(dayjs());

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        const title = data.get('title')?.toString().trim() || '';
        const description = data.get('description')?.toString().trim() || '';
        const image = data.get('image')?.toString().trim() || '';

        if (title === '') {
            setTitleMt(true)
        }
        if (description === '') {
            setDescriptionMt(true);
        }
        if (image === '') {
            setImageMt(true);
        }

        setLoading(true);

        try {
            await problemApi.createProblem(title, description, bidDeadline!.toISOString().toString(), image);
            setLoading(false);
            navigate('/marketplace/problems');
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
            <Stack direction="column" spacing={2}>
                <TextField
                    error={titleMt}
                    required
                    name="title"
                    id="title"
                    label="Title"
                    helperText="The title of your problem"
                />
                <TextField
                    error={descriptionMt}
                    required
                    id="desc-required"
                    name="description"
                    label="Description"
                    multiline
                    maxRows={4}
                    helperText="The description of your problem"
                />
                <Box sx={{pb:"15px"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Bid Deadline"
                                value={bidDeadline}
                                onChange={(newValue) => setBidDeadline(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <TextField
                    name="image"
                    error={imageMt}
                    required
                    id="image-required"
                    defaultValue="https://"
                    label="Image URL"
                    helperText="The image of your problem"
                />
            </Stack>
          <LoadingButton
              sx={{ mt: 3, mb: 2 }}
              variant='outlined'
              fullWidth
              color='success'
              type='submit'
              loading={loading}
          >
              Create Problem
          </LoadingButton>
      </Box>
  )
};

export default CreateProblemPage;
