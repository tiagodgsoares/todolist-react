import { useState } from 'react';
import { FILTERS, SERVER_ENDPOINTS } from '../constants';

const useTodoService = () => {
  const accessToken = localStorage.getItem('accessToken') || '';
  const [userId, setUserId] = useState<string>('');
  const headers = {
    'Authorization': accessToken,
    'Content-Type': 'application/json',
    'userId': userId,
  };

  const addTodo = async (todo: string) => {
    try {
      const response = await fetch(SERVER_ENDPOINTS.TODOS, {
        method: 'POST',
        headers,
        body: JSON.stringify({ description: todo }),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch(SERVER_ENDPOINTS.TODOS, {
        method: 'GET',
        headers,
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const setState = async (id: number, newState: string) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ state: newState }),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id: number, newDescription: string) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ description: newDescription }),
      })
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}/${id}`, {
        method: 'DELETE',
        headers,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredTodos = async () => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}?filter=${FILTERS.INCOMPLETE}`, {
        method: 'GET',
        headers,
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getSortedTodos = async (order: string) => {
    try {
      const response = await fetch(`${SERVER_ENDPOINTS.TODOS}?orderBy=${order}`, {
        method: 'GET',
        headers,
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setUserId,
    addTodo,
    getTodos,
    setState,
    editTodo,
    deleteTodo,
    getFilteredTodos,
    getSortedTodos,
  };
};

export default useTodoService;
