import React, { useState } from 'react';
import '../styles.css';
import { FILTERS } from '../constants';

interface TodoItemProps {
  id: number;
  description: string;
  state: string;
  setState: (id: number, newState: string) => void;
  edit: (id: number, newDescription: string) => void;
  remove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description, state, setState, edit, remove }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedDescription, setEditedDescription] = useState<string>(description);
  const [isCompleted, setIsCompleted] = useState<string>(state);

  const handleCheck = () => {
    if (isCompleted === FILTERS.INCOMPLETE) {
      setIsCompleted(FILTERS.COMPLETE);
      setState(id, FILTERS.COMPLETE);
    }
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
          <input type='checkbox' checked={isCompleted === FILTERS.COMPLETE} onChange={handleCheck} />
          <div className='description'>{description}</div>
          <button className='edit-button' onClick={handleEdit}>Edit</button>
          <button className='delete-button' onClick={() => remove(id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;