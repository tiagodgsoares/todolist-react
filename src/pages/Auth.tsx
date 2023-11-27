import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  isRegistered: boolean;
}

const Auth: React.FC<AuthProps> = ({ isRegistered }) => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => navigate('/')}>
        <HomeIcon />
      </IconButton>
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
        {isRegistered ? <Login /> : <Register />}
      </Box>
    </>
  );
};

export default Auth;