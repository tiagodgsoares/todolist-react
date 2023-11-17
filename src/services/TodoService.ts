import { SERVER_ENDPOINTS } from '../constants';


const headers = {
  'Authorization': 'eyJhbGciOiJIUzI1NiJ9.MQ.b1CAsW9VcBfagGWJd39uBV81ta8JjqSwHIw4A4DJ0ug',
  'Content-Type': 'application/json',
};

export const TodoService = {
  addTask: async (task: string) => {
    try {
      const response = await fetch(SERVER_ENDPOINTS.TODOS, {
        method: 'POST',
        headers,
        body: JSON.stringify({ description: task }),
      });
      return response.json();
    } catch (error: any) {
      console.log(error);
    }
  },
  getTasks: async () => {
    try {
      const response = await fetch(SERVER_ENDPOINTS.TODOS, {
        method: 'GET',
        headers,
      });
      return response.json();
    } catch (error: any) {
      console.log(error);
    }
  },
  setState: async (id: number, newState: string) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ state: newState }),
      });
      return response.json();
    } catch (error: any) {
      console.log(error);
    }
  },
  editTask: async (id: number, newDescription: string) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ description: newDescription }),
      })
      return response.json();
    } catch (error: any) {
      console.log(error);
    }
  },
  deleteTask: async (id: number) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}/${id}`, {
        method: 'DELETE',
        headers,
      });
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(error);
    };
  },
};
