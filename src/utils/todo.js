const Todo = (title, description, dueDate, priority, done = false) => {
  return {
    title, description, dueDate, priority, done,
  };
};


export default Todo;