import React from 'react';
import TodoForm from '../components/TodoForm';
import { TodoService } from '../services/TodoService';

const Home: React.FC = () => {
  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm createTask={TodoService.addTask}/>
    </div>
  );
};

export default Home;