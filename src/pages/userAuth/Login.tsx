import { Box, Button, TextField, Alert } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'
import authApi from '../../api/authApi'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [usernameErrText, setUsernameErrText] = useState('')
  const [passwordErrText, setPasswordErrText] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUsernameErrText('')
    setPasswordErrText('')
    setLoginError('')

    const data = new FormData(e.currentTarget as HTMLFormElement)
    const username = data.get('username')?.toString().trim() || ''
    const password = data.get('password')?.toString().trim() || ''

    let err = false

    if (username === '') {
      err = true
      setUsernameErrText('Please fill this field')
    }
    if (password === '') {
      err = true
      setPasswordErrText('Please fill this field')
    }

    if (err) return

    setLoading(true)

    function sleep(delay = 0) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }

    try {
      const res = await authApi.login({ username, password })
      localStorage.setItem('token', res.access_token)
      setLoading(false)
      await sleep(1e2);
      navigate('/dashboard')
    } catch (err) {
      setLoading(false)
      setLoginError('Login failed. Please check your credentials.')
    }
  }

  return (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
        noValidate
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='username'
          label='Username'
          name='username'
          disabled={loading}
          error={usernameErrText !== ''}
          helperText={usernameErrText}
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
        {loginError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {loginError}
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
          Login
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/signup'
        sx={{ textTransform: 'none' }}
      >
        Don't have an account? Signup
      </Button>
      <Button component={Link} to="/" sx={{ textTransform: 'none' }}>
        Back to Home page
      </Button>
    </>
  )
}

export default Login
