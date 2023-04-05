import { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ addTodo }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={text}
          name="text"
          className="formInput"
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button} type="submit" title="Submit">
          Add task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
