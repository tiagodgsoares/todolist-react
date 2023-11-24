import { SERVER_ENDPOINTS } from '../constants';

const headers = {
  'Content-Type': 'application/json',
};

export const AuthService = {
  login: async (email: string, password: string) => {
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
  },
};
