import projects from '../projects/projects';

const renderBody = () => {
  const { body } = document;


  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('panel');
  body.appendChild(bodyDiv);


  const pBody = document.createElement('div');
  pBody.classList.add('action-panel');
  bodyDiv.appendChild(pBody);


  const pHead = document.createElement('div');
  pHead.classList.add('pHead');
  pBody.appendChild(pHead);


  const pTitle = document.createElement('div');
  pTitle.classList.add('pTitle');
  pHead.appendChild(pTitle);


  const project = document.createElement('div');
  project.innerHTML = 'Projects List';
  pTitle.appendChild(project);


  const pContainer = document.createElement('div');
  pContainer.classList.add('pContainer');
  pContainer.setAttribute('id', 'projects-container');
  pBody.appendChild(pContainer);


  const pDetails = document.createElement('section');
  pDetails.classList.add('pDetails');
  pDetails.setAttribute('id', 'pDetails');
  bodyDiv.appendChild(pDetails);


  projects();
};

export default renderBody;