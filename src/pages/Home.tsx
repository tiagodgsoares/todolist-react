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
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Logout from '../components/Logout';
import { useNavigate } from 'react-router-dom';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const [todos, setTodos] = useState<{ id: number; description: string; state: string }[]>([]);
  const [filtered, setFiltered] = useState<boolean>(false);
  const [order, setOrder] = useState<string>(ORDERS.CREATED_AT);
  const todoService = useTodoService();
  const navigate = useNavigate();

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
    <>
      {
        localStorage.getItem('accessToken') ? (
          <Box>
            <Box sx={{ mb: 2, display: 'flex', flexDirection: 'row-reverse' }}>
              <Logout />
            </Box>
            <TodoForm createTodo={handleCreateTodo} />
            <Typography
              onClick={handleSetSorting}
              variant='h4'
              component='div'
              color="text.secondary"
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

        ) : (
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="to-do list"
              height="300"
              image={require("./todolist_image.jpeg")}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" color="text.secondary">
                To-Do App
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={() => {navigate('/login')}}>Sign In</Button>
              <Button size="large" onClick={() => {navigate('/register')}}>Sign Up</Button>
            </CardActions>
          </Card>
        )}
    </>
  );
};

export default Home;
