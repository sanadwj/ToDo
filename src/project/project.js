
const renderProject = (project, idx) => {
  const projectContainer = document.querySelector('#pDetails');
  projectContainer.innerHTML = '';

  const pBody = document.createElement('div');
  pBody.classList.add('pBody');
  projectContainer.appendChild(pBody);


  const pTitle = document.createElement('div');
  pTitle.classList.add('projectTitle');
  pTitle.innerHTML += ` ${project.title}`;
  pBody.appendChild(pTitle);

  const projectCircle = document.createElement('span');
  projectCircle.className = 'project-icon';
  projectCircle.style.backgroundColor = project.color;
  pTitle.appendChild(projectCircle);

  const projectDescription = document.createElement('div');
  projectDescription.className = 'project-description';
  projectDescription.textContent = project.description;
  pBody.appendChild(projectDescription);


  const todos = document.createElement('div');
  todos.setAttribute('id', 'todos');
  todos.setAttribute('data-project-index', idx);
  todos.className = 'todos';
  pBody.appendChild(todos);
};