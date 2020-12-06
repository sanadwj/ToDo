class Project {
  constructor(title, description, color) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

export default Project;