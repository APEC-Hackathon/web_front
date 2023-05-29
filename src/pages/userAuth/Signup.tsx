import { Box, Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import authApi from '../../api/authApi';

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [emailErrText, setEmailErrText] = useState('');
  const [passwordErrText, setPasswordErrText] = useState('');
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState('');
  const [signupError, setSignupError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailErrText('');
    setPasswordErrText('');
    setConfirmPasswordErrText('');
    setSignupError(null);

    const data = new FormData(e.currentTarget as HTMLFormElement);
    const email = data.get('email')?.toString().trim() || '';
    const password = data.get('password')?.toString().trim() || '';
    const confirmPassword = data.get('confirmPassword')?.toString().trim() || '';

    let err = false;

    if (email === '') {
      err = true;
      setEmailErrText('Please fill this field');
    }
    if (password === '') {
      err = true;
      setPasswordErrText('Please fill this field');
    }
    if (confirmPassword === '') {
      err = true;
      setConfirmPasswordErrText('Please fill this field');
    }
    if (password !== confirmPassword) {
      err = true;
      setConfirmPasswordErrText('Confirm password does not match');
    }

    if (err) return;

    setLoading(true);

    try {
      const res = await authApi.signup({
        email,
        password,
      });
      setLoading(false);
      localStorage.setItem('user', res.id?.toString() || '');
      navigate('/');
    } catch (err: any) {
      setLoading(false);
      setSignupError(err.response?.data?.detail || 'Signup failed. Please try again.');
    }
  };

  return (
    <>
      <Box
        component='form'
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email'
          name='email'
          disabled={loading}
          error={emailErrText !== ''}
          helperText={emailErrText}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          label='Password'
          name='password'
          type='password'
          disabled={loading}
          error={passwordErrText !== ''}
          helperText={passwordErrText}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='confirmPassword'
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          disabled={loading}
          error={confirmPasswordErrText !== ''}
          helperText={confirmPasswordErrText}
        />
        {signupError && (
          <Alert severity='error' sx={{ mt: 2 }}>
            {signupError}
          </Alert>
        )}
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/login'
        sx={{ textTransform: 'none' }}
      >
        Already have an account? Login
      </Button>
      <Button component={Link} to="/" sx={{ textTransform: 'none' }}>
        Back to Home page
      </Button>
    </>
  )
}

export default Signup
