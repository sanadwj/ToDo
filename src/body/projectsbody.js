import projects from '../projects/projects';

const renderBody = () => {
  const { body } = document;


  const bodyDiv = document.createElement('div');
  bodyDiv.className = 'panel  flex';
  body.appendChild(bodyDiv);


  const pBody = document.createElement('div');
  pBody.className = 'action-panel bg-white shadow w-64 h-screen';
  bodyDiv.appendChild(pBody);


  const pHead = document.createElement('div');
  pHead.className = 'pHead bg-white shadow w-64 py-2';
  pBody.appendChild(pHead);


  const pTitle = document.createElement('div');
  pTitle.classList.add('pTitle');
  pHead.appendChild(pTitle);


  const project = document.createElement('div');
  project.className = 'text-2xl text-purple-400 text-center';
  project.innerHTML = 'Projects List';
  pTitle.appendChild(project);


  const pContainer = document.createElement('div');
  pContainer.className = 'pContainer';
  pContainer.setAttribute('id', 'projects-container');
  pBody.appendChild(pContainer);


  const pDetails = document.createElement('div');
  pDetails.className = 'pDetails w-full';
  pDetails.setAttribute('id', 'pDetails');
  bodyDiv.appendChild(pDetails);


  projects();
};

export default renderBody;