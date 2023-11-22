import React, { useState } from 'react';
import { FILTERS } from '../constants';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

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
    <ListItem disablePadding>
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isCompleted === FILTERS.COMPLETE}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-${id}` }}
            onChange={handleCheck}
          />
        </ListItemIcon>
        {isEditing ? (
          <>
            <TextField
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              sx={{ width: '75%' }}
            />
            <IconButton edge="end" aria-label="save" onClick={handleSave}>
              <CheckOutlinedIcon />
            </IconButton>
          </>
        ) : (
          <>
            <ListItemText id={`checkbox-list-label-${id}`} primary={description} />
            <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => remove(id)}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;