import navBar from './nav/navBar';
import renderBody from './body/projectsbody';
import Project from './utils/project';
import Todo from './utils/todo';
import '@fortawesome/fontawesome-free/js/all';
import './tailwind.css';


if (!localStorage.getItem('projects')) {
  const projects = [];

  const newProject = new Project(
    'default',
    `Here goes all of your default Todos, You can create 
    a new project for more organisation`,
    'green',
  );

  projects.push(newProject);

  const t1 = Todo('Make a doctor  appointment', 'testing', '2020-10-22', 'high', true);
  const t2 = Todo('Organizing my Desk', 'testing', '2020-12-28', 'low', false);
  newProject.addTodo(t1);
  newProject.addTodo(t2);


  localStorage.setItem('projects', JSON.stringify(projects));
}

navBar();
renderBody();
