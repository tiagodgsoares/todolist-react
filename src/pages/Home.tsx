import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoService } from '../services/TodoService';
import { ORDERS } from '../constants';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const [tasks, setTasks] = useState<{ id: number; description: string; state: string }[]>([]);
  const [filtered, setFiltered] = useState<boolean>(false);
  const [order, setOrder] = useState<string>(ORDERS.CREATED_AT);

  const fetchTasks = async () => {
    const response = await TodoService.getTasks();
    setTasks(response);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async (task: string) => {
    await TodoService.addTask(task);
    fetchTasks();
  };

  const handleSetState = async (id: number, newState: string) => {
    await TodoService.setState(id, newState);
    fetchTasks();
  };

  const handleEditTask = async (id: number, newDescription: string) => {
    await TodoService.editTask(id, newDescription);
    fetchTasks();
  };

  const handleDeleteTask = async (id: number) => {
    await TodoService.deleteTask(id);
    fetchTasks();
  };

  const handleSetFilter = async () => {
    if (filtered) {
      fetchTasks();
    } else {
      const response = await TodoService.getFilteredTasks();
      setTasks(response);
    }
    setFiltered(!filtered);
  };

  const handleSetSorting = async () => {
    if (order === ORDERS.CREATED_AT) {
      const response = await TodoService.getSortedTasks(ORDERS.DESCRIPTION);
      setTasks(response);
      setOrder(ORDERS.DESCRIPTION);
    }
    if (order === ORDERS.DESCRIPTION) {
      const response = await TodoService.getSortedTasks(ORDERS.CREATED_AT);
      setTasks(response);
      setOrder(ORDERS.CREATED_AT);
    }
  };

  return (
    <div>
      <br />
      <TodoForm createTask={handleCreateTask} />
      <br />
      <Typography
        onClick={handleSetSorting}
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          '&:hover': {
            cursor: 'pointer'
          }
        }}>
        Tasks
      </Typography>
      <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 2 }}>
        <TodoList
          tasks={tasks}
          setState={handleSetState}
          editTask={handleEditTask}
          deleteTask={handleDeleteTask}
        />
      </Box>
      <br />
      <FormGroup>
        <FormControlLabel control={<Switch checked={filtered} onChange={handleSetFilter} />} label="Hide completed" />
      </FormGroup>
    </div>
  );
};

export default Home;
