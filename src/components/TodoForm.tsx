import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';


interface TodoFormProps {
  createTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ createTodo }) => {
  const [todo, setTodo] = useState<string>('');

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo.trim() !== '') {
      createTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='New task'
        placeholder='Write new task here...'
        value={todo}
        onChange={handleTodoChange}
        sx={{
          width: '75%',
          minWidth: 350
        }}
      />
      <IconButton type='submit'>
        <AddCircleOutlinedIcon fontSize="large"/>
      </IconButton>
    </form>
  );
};

export default TodoForm;
