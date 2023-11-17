import React, { useState } from 'react';

interface TodoItemProps {
  id: number;
  description: string;
  state: string;
  setState: (id: number, newState: string) => void;
  edit: (id: number) => void;
  remove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description, state, setState, edit, remove }) => {

  const [isCompleted, setIsCompleted] = useState(state === 'COMPLETE');

  const checkHandler = () => {
    setIsCompleted(!isCompleted);
    setState(id, 'COMPLETE');
  }

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={checkHandler} />
      <span>{description}</span>
      <button onClick={() => edit(id)}>Edit</button>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;