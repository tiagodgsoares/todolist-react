import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoService } from '../services/TodoService';
import { FILTERS, ORDERS } from '../constants';

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
      <h1>To-Do App</h1>
      <TodoForm createTask={handleCreateTask} />
      <br />
      <h2 className='tasks-header' onClick={handleSetSorting}>Tasks</h2>
      <TodoList
        tasks={tasks}
        setState={handleSetState}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask}
      />
      <button onClick={handleSetFilter}>
        <input type='checkbox' checked={filtered} onChange={handleSetFilter} />
        <div>Hide completed</div>
      </button>
    </div>
  );
};

export default Home;
