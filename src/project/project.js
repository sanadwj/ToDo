// eslint-disable-next-line import/no-cycle
import todos from '../projects/todos';
// eslint-disable-next-line import/no-cycle
import add from '../todo/todo';


const renderProject = (project, index) => {
  const projectContainer = document.querySelector('#pDetails');
  projectContainer.innerHTML = '';

  const pBody = document.createElement('div');
  pBody.classList.add('pBody');
  projectContainer.appendChild(pBody);


  const pTitle = document.createElement('div');
  pTitle.className = 'projectTitle pHead bg-white shadow w-full py-2 text-2xl text-purple-400 text-center';
  pTitle.textContent = project.title;
  pBody.appendChild(pTitle);


  const projectDescription = document.createElement('div');
  projectDescription.className = 'project-description p-12';
  projectDescription.textContent = project.description;
  pBody.appendChild(projectDescription);


  const todosDiv = document.createElement('div');
  todosDiv.setAttribute('id', 'todos');
  todosDiv.setAttribute('data-project-index', index);
  todosDiv.className = 'todos flex justify-center flex-col p-6';
  pBody.appendChild(todosDiv);

  todos(project);
  add(project);
};

export default renderProject;