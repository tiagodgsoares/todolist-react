import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoService } from '../services/TodoService';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const [tasks, setTasks] = useState<{ id: number; description: string; state: string }[]>([]);

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

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm createTask={handleCreateTask} />
      <TodoList
        tasks={tasks}
        setState={handleSetState}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Home;
