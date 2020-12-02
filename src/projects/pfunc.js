import project from './project';

import 'tailwindcss/tailwind.css';

const projects = [];
const body = document.getElementById('content');
body.className = 'flex flex-row';
body.appendChild(project);

const Project = (title) => title;

const addProject = () => {
  const title = document.getElementById('title').value;
  for (let i = 0; i < projects.length; i++) {
    const newProject = Project(title);

    projects.push(newProject);
    localStorage.setItem('data', JSON.stringify(newProject));
  }
};


const submit = document.getElementById('submit');
if (submit) {
  submit.onclick = (e) => {
    e.preventDefault();
    addProject();
  };
}

console.log(projects);
export default project;
