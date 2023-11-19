import React, { useState } from 'react';
import '../styles.css';

interface TodoItemProps {
  id: number;
  description: string;
  state: string;
  setState: (id: number, newState: string) => void;
  edit: (id: number, newDescription: string) => void;
  remove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description, state, setState, edit, remove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [isCompleted, setIsCompleted] = useState(state === 'COMPLETE');

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
    setState(id, 'COMPLETE');
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    edit(id, editedDescription);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className='edit-container'>
          <input
            className='editor-input'
            type='text'
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='todo-item'>
          <input type='checkbox' checked={isCompleted} onChange={handleCheck} />
          <div className='description'>{description}</div>
          <button className='edit-button' onClick={handleEdit}>Edit</button>
          <button className='delete-button' onClick={() => remove(id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;