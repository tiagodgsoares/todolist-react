import { SERVER_ENDPOINTS } from '../constants';

export const TodoService = {
  addTask: async (task: string) => {
    await fetch(SERVER_ENDPOINTS.TODOS, {
      method: 'POST',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.MQ.b1CAsW9VcBfagGWJd39uBV81ta8JjqSwHIw4A4DJ0ug',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: task }),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((error) => {
      alert(error.message);
    });
  },
};
