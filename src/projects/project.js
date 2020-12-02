
const project = () => {
  const projectsCol = document.createElement('div');
  projectsCol.className = 'flex flex-col';
  projectsCol.innerHTML = 'Hello World';

  const project = document.createElement('form');
  project.className = 'flex flex-col';

  const pInput = document.createElement('input');
  pInput.setAttribute('id', 'title');
  pInput.setAttribute('type', 'text');
  pInput.setAttribute('placeholder', 'Title');
  project.appendChild(pInput);
  projectsCol.appendChild(project);


  const ptitle = document.createElement('div');
  ptitle.className = 'ptitle';

  const pSubmit = document.createElement('div');
  pSubmit.className = 'pSubmit flex w-24';
  const submit = document.createElement('button');
  submit.setAttribute('id', 'submit');
  submit.setAttribute('type', 'submit');

  submit.className = 'submit w-24 h-24';


  pSubmit.appendChild(submit);
  project.appendChild(pSubmit);
  projectsCol.appendChild(project);
  return projectsCol;
};

// const submit = document.getElementById('submit');
//
//
// submit.onclick = (e) => {
//   e.preventDefault();
//   addProject();
//   window.location.reload();
// };


export default project();