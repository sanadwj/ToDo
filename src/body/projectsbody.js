
const render = () => {
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
  pContainer.setAttribute('id', 'pContainer');


  const pDetails = document.createElement('section');
  pDetails.classList.add('pDetails');
  pDetails.setAttribute('id', 'pDetails');


};