import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTodoService from '../services/TodoService';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const todoService = useTodoService();

  const handleLogout = async () => {
    localStorage.removeItem('accessToken');
    todoService.setUserId('');
    navigate('/login');
  };

  return (
    <IconButton aria-label="logout" onClick={handleLogout}>
      <Typography variant='h6' fontSize='small' sx={{ mr: 1 }}>Sign Out</Typography>
      <ExitToAppIcon />
    </IconButton>
  );
}

export default Logout;
