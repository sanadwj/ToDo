export default class Todo {
  constructor(title, description, dueDate, priority, done = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = done;
  }
}