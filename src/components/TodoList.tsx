import React from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';

interface TodoListProps {
  todos: { id: number; description: string; state: string }[];
  setState: (id: number, newState: string) => void;
  editTodo: (id: number, newDescription: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setState, editTodo, deleteTodo }) => {
  return (
    <List dense sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          state={todo.state}
          setState={setState}
          edit={editTodo}
          remove={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
