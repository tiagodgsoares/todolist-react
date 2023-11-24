import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import useTodoService from '../services/TodoService';
import { ORDERS } from '../constants';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const [todos, setTodos] = useState<{ id: number; description: string; state: string }[]>([]);
  const [filtered, setFiltered] = useState<boolean>(false);
  const [order, setOrder] = useState<string>(ORDERS.CREATED_AT);
  const todoService = useTodoService();

  const fetchTodos = async () => {
    const response = await todoService.getTodos();
    setTodos(response);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreateTodo = async (todo: string) => {
    await todoService.addTodo(todo);
    fetchTodos();
  };

  const handleSetState = async (id: number, newState: string) => {
    await todoService.setState(id, newState);
    fetchTodos();
  };

  const handleEditTodo = async (id: number, newDescription: string) => {
    await todoService.editTodo(id, newDescription);
    fetchTodos();
  };

  const handleDeleteTodo = async (id: number) => {
    await todoService.deleteTodo(id);
    fetchTodos();
  };

  const handleSetFilter = async () => {
    if (filtered) {
      fetchTodos();
    } else {
      const response = await todoService.getFilteredTodos();
      setTodos(response);
    }
    setFiltered(!filtered);
  };

  const handleSetSorting = async () => {
    if (order === ORDERS.CREATED_AT) {
      const response = await todoService.getSortedTodos(ORDERS.DESCRIPTION);
      setTodos(response);
      setOrder(ORDERS.DESCRIPTION);
    }
    if (order === ORDERS.DESCRIPTION) {
      const response = await todoService.getSortedTodos(ORDERS.CREATED_AT);
      setTodos(response);
      setOrder(ORDERS.CREATED_AT);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TodoForm createTodo={handleCreateTodo} />
      <Typography
        onClick={handleSetSorting}
        variant='h4'
        component='div'
        sx={{
          mt: 4,
          flexGrow: 1,
          '&:hover': {
            cursor: 'pointer'
          }
        }}>
        Tasks
      </Typography>
      <Box sx={{ mt: 1, border: 1, borderColor: 'divider', borderRadius: 2 }}>
        <TodoList
          todos={todos}
          setState={handleSetState}
          editTodo={handleEditTodo}
          deleteTodo={handleDeleteTodo}
        />
      </Box>
      <FormGroup sx={{ mt: 2 }}>
        <FormControlLabel control={<Switch checked={filtered} onChange={handleSetFilter} />} label='Hide completed' />
      </FormGroup>
    </Box>
  );
};

export default Home;
