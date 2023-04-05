import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

function TaskList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      <h1>What's the Plan for Today</h1>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TaskList;
