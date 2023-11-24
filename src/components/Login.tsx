import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import useTodoService from '../services/TodoService';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const todoService = useTodoService();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await AuthService.login(email, password);

    if (response.userId) {
      localStorage.setItem('accessToken', response.accessToken);
      todoService.setUserId(response.userId);
      navigate(`/userId=${response.userId}`);
    }
    if (!response.userId) {
      setLoginFailed(true);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400
      }}
    >
      <Avatar sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign In
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        {loginFailed && (
          <Typography fontSize='small' color='red' sx={{ mb: 5 }}>
            Invalid username or password. Please re-enter your login info.
          </Typography>
        )}
        <Link href='#'
          variant='body2'
          sx={{ mt: 5 }}
        >
          {"Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Box>);
}

export default Login;
