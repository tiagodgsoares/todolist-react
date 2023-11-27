import { SERVER_ENDPOINTS } from '../constants';

const useAuthService = () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(SERVER_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
      });
      return response.json();
    } catch (error: any) {
      console.log(error);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch(SERVER_ENDPOINTS.USERS, {
        method: 'POST',
        headers,
        body: JSON.stringify({ name, email, password }),
      });
      return response.json();
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    login,
    register,
  };
};

export default useAuthService;