
import '../tailwind.css';


const { body } = document;
const div = document.createElement('div');
div.setAttribute('id', 'content');
div.className = 'flex flex-row';
div.appendChild(project());
div.appendChild(projectRender());
body.appendChild(div);

const myProjects = [];

const Project = (title) => {
  return { title };
};

const addProject = () => {
  const projects = JSON.parse(localStorage.getItem('data'));
  const title = document.getElementById('title').value;
  // for (let i = 0; i < projects.length; i += 1) {

  const newProject = Project(title);

  projects.unshift(newProject);
  localStorage.setItem('data', JSON.stringify(projects));
};


const render = () => {
  if (localStorage.getItem('data')) {
    const projects = JSON.parse(localStorage.getItem('data'));
    // for (let i = 0; i < myProjects.length; i++) {
    //   myProjects[i];
    // }
    projects.forEach(p => {
      projectRender(p);
    });
  }
};


const submit = document.getElementById('submit');
if (submit) {
  submit.onclick = (e) => {
    e.preventDefault();
    addProject();
    window.location.reload();
  };
}

window.onload = () => {
  render();
};
console.log(myProjects);
