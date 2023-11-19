import React from 'react';
import TodoItem from './TodoItem';
import '../styles.css';

interface TodoListProps {
  tasks: { id: number; description: string; state: string }[];
  setState: (id: number, newState: string) => void;
  editTask: (id: number, newDescription: string) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, setState, editTask, deleteTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TodoItem
            id={task.id}
            description={task.description}
            state={task.state}
            setState={setState}
            edit={editTask}
            remove={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
