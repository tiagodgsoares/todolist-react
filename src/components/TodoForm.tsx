import React, { useState } from 'react';

interface Props {
  createTask: (task: string) => void;
}

const TodoForm: React.FC<Props> = ({ createTask }) => {
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
      <input
        type="text"
        placeholder="Write new task here..."
        value={task}
        onChange={handleTaskChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;
