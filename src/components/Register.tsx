import React from 'react';
import AuthForm from './AuthForm';
import useAuthService from '../services/AuthService';
import useTodoService from '../services/TodoService';

const Register: React.FC = () => {
  const authService = useAuthService();
  const todoService = useTodoService();

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await authService.register(name, email, password);

    if (response.userId) {
      localStorage.setItem('accessToken', response.accessToken);
      todoService.setUserId(response.userId);
    }
  };

  return <AuthForm onSubmit={handleSubmit} showNameField={true} actionText="Sign Up" linkText="Already have an account? Sign In" linkTo="/login" formError="Impossible to create new user. Please try again."/>;
}

export default Register;