
const project = () => {
  const projectsCol = document.createElement('div');
  projectsCol.className = 'flex flex-col';


  const form = document.createElement('form');
  form.className = 'flex flex-col';

  const pInput = document.createElement('input');
  pInput.setAttribute('id', 'title');
  pInput.setAttribute('type', 'text');
  pInput.setAttribute('placeholder', 'Title');
  pInput.className = 'form-input';
  form.appendChild(pInput);
  projectsCol.appendChild(form);


  const ptitle = document.createElement('div');
  ptitle.className = 'ptitle';

  const pSubmit = document.createElement('div');
  pSubmit.className = 'pSubmit flex w-24';
  const submit = document.createElement('button');
  submit.setAttribute('id', 'submit');
  // submit.setAttribute('type', 'submit');

  submit.className = 'submit w-24 h-24';


  pSubmit.appendChild(submit);
  form.appendChild(pSubmit);
  projectsCol.appendChild(form);
  return projectsCol;
};

const projectRender = (p) => {
  const pBody = document.createElement('div');
  const pTitle = document.createElement('div');
  pTitle.innerHTML = `${p.title}`;
  pBody.appendChild(pTitle);
  return pBody;
};

export { project, projectRender };