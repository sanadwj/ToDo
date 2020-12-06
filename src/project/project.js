import todos from '../projects/todos';


const renderProject = (project, index) => {
  const projectContainer = document.querySelector('#pDetails');
  projectContainer.innerHTML = '';

  const pBody = document.createElement('div');
  pBody.classList.add('pBody');
  projectContainer.appendChild(pBody);


  const pTitle = document.createElement('div');
  pTitle.classList.add('projectTitle');
  pTitle.textContent = project.title;
  pBody.appendChild(pTitle);

  const projectCircle = document.createElement('span');
  projectCircle.className = 'project-icon';
  projectCircle.style.backgroundColor = project.color;
  pTitle.appendChild(projectCircle);

  const projectDescription = document.createElement('div');
  projectDescription.className = 'project-description';
  projectDescription.textContent = project.description;
  pBody.appendChild(projectDescription);


  const todosDiv = document.createElement('div');
  todosDiv.setAttribute('id', 'todos');
  todosDiv.setAttribute('data-project-index', index);
  todosDiv.className = 'todos';
  pBody.appendChild(todosDiv);

  todos(project);
};

export default renderProject;