import React from 'react';
import AuthForm from './AuthForm';
import useAuthService from '../services/AuthService';
import useTodoService from '../services/TodoService';

const Login: React.FC = () => {
  const authService = useAuthService();
  const todoService = useTodoService();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await authService.login(email, password);

    if (response.userId) {
      localStorage.setItem('accessToken', response.accessToken);
      todoService.setUserId(response.userId);
    }
  };

  return <AuthForm onSubmit={handleSubmit} showNameField={false} actionText="Sign In" linkText="Don't have an account? Sign Up" linkTo="/register" formError="Invalid username or password. Please re-enter your login info."/>;
}

export default Login;
