import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  showNameField: boolean;
  actionText: string;
  linkText: string;
  linkTo: string;
  formError: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, showNameField, actionText, linkText, linkTo, formError }) => {
  const navigate = useNavigate();
  const [formFailed, setFormFailed] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      await onSubmit(formData);
      navigate('/');
    } catch (error) {
      setFormFailed(true);
    }
  };

  return (
    <>
      <Typography component='h1' variant='h5'>
        {actionText}
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}>
        {showNameField && (
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            name='name'
            autoFocus
          />
        )}
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          {actionText}
        </Button>
        {formFailed && (
          <Typography fontSize='small' color='red' sx={{ mb: 5 }}>
            {formError}
          </Typography>
        )}
        <Link href='#' onClick={() => navigate(linkTo)} variant='body2' sx={{ mt: 5 }}>
          {linkText}
        </Link>
      </Box>
    </>
  );
}

export default AuthForm;
