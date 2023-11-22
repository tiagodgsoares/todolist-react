import React from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';

interface TodoListProps {
  tasks: { id: number; description: string; state: string }[];
  setState: (id: number, newState: string) => void;
  editTask: (id: number, newDescription: string) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, setState, editTask, deleteTask }) => {
  return (
    <List dense sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          description={task.description}
          state={task.state}
          setState={setState}
          edit={editTask}
          remove={deleteTask}
        />
      ))}
    </List>
  );
};

export default TodoList;
