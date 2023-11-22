import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';


interface TodoFormProps {
  createTask: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ createTask }) => {
  const [task, setTask] = useState<string>('');

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (task.trim() !== '') {
      createTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='New task'
        placeholder='Write new task here...'
        value={task}
        onChange={handleTaskChange}
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
