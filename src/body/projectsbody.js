import projects from '../projects/projects';

const renderBody = () => {
  const { body } = document;


  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('panel');

  const pBody = document.createElement('div');
  pBody.classList.add('action-panel');

  const pHead = document.createElement('div');
  pHead.classList.add('pHead');


  const pTitle = document.createElement('div');
  pTitle.classList.add('pTitle');


  const arrow = document.createElement('div');
  arrow.classList.add('arrow');


  const project = document.createElement('div');
  project.innerHTML = 'Projects';


  const pContainer = document.createElement('div');
  pContainer.classList.add('pContainer');
  pContainer.setAttribute('id', 'projects-container');


  const pDetails = document.createElement('section');
  pDetails.classList.add('pDetails');
  pDetails.setAttribute('id', 'pDetails');

  pTitle.appendChild(arrow);
  pTitle.appendChild(project);
  pHead.appendChild(pTitle);
  pBody.appendChild(pHead);
  pBody.appendChild(pContainer);
  bodyDiv.appendChild(pBody);
  bodyDiv.appendChild(pDetails);
  body.appendChild(bodyDiv);

  projects();
};

export default renderBody;