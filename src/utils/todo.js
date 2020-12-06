const Todo = (title, notes, dueDate, priority, done = false) => {
  return {
    title, notes, dueDate, priority, done,
  };
};


export default Todo;