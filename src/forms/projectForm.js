import renderProjects from '../projects/projects';
import Project from '../utils/project';
import './forms.css';


const projectForm = () => {
  const { body } = document;
  body.className = 'relative';
  const container = document.createElement('div');
  container.id = 'project-form';
  container.className = 'container bg-purple-200 ';


  const form = document.createElement('form');
  form.className = 'grid grid-cols-1 gap-6 w-80 abs bg-purple-50 p-2.5 rounded-lg';
  container.appendChild(form);


  const header = document.createElement('h3');
  header.className = 'text-2xl font-bold text-center text-purple-600';
  header.textContent = 'New Project';
  form.appendChild(header);

  const tDiv = document.createElement('div');
  tDiv.className = 'form-group';
  form.appendChild(tDiv);

  const tLabel = document.createElement('div');
  tLabel.className = 'text-gray-700';
  tLabel.innerHTML = 'Title';
  tDiv.appendChild(tLabel);


  const tInput = document.createElement('input');
  tInput.id = 'title';
  tInput.className = 'mt-0 block w-full rounded-lg px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  tInput.setAttribute('type', 'text');
  tInput.setAttribute('name', 'title');
  tDiv.appendChild(tInput);


  const tWarning = document.createElement('small');
  tWarning.id = 'tWarning';
  tWarning.className = 'form-text text-danger';
  tWarning.textContent = 'Please Enter a Project Title';
  tWarning.style.display = 'none';
  tDiv.appendChild(tWarning);


  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('form');
  form.appendChild(descriptionDiv);


  const descriptionLabel = document.createElement('div');
  descriptionLabel.className = 'text-gray-700';
  descriptionLabel.innerHTML = 'Description';
  descriptionDiv.appendChild(descriptionLabel);


  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'discription';
  descriptionInput.className = 'mt-0 block rounded-lg w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('rows', '3');
  descriptionDiv.appendChild(descriptionInput);


  const dWarning = document.createElement('small');
  dWarning.id = 'dnWarning';
  dWarning.textContent = 'Please Enter a Project Description';
  dWarning.style.display = 'none';
  descriptionDiv.appendChild(dWarning);


  const pariorityDiv = document.createElement('div');
  pariorityDiv.classList.add('form');
  form.appendChild(pariorityDiv);


  const pariorityLabel = document.createElement('div');
  pariorityLabel.className = 'text-gray-700';
  pariorityLabel.innerHTML = 'Color';
  pariorityDiv.appendChild(pariorityLabel);


  const pariorityInput = document.createElement('input');
  pariorityInput.id = 'pariority';
  pariorityInput.setAttribute('type', 'color');
  pariorityInput.setAttribute('name', 'project-color');
  pariorityInput.setAttribute('value', '#008000');
  pariorityDiv.appendChild(pariorityInput);


  const submit = document.createElement('button');
  submit.id = 'submit';
  submit.setAttribute('type', 'submit');
  submit.innerHTML = 'Submit';
  submit.className = 'px-8 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  form.appendChild(submit);


  const cancel = document.createElement('button');
  cancel.innerHTML = 'Cancel';
  cancel.className = 'px-8 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  form.appendChild(cancel);


  body.appendChild(container);


  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = tInput.value;
    const description = descriptionInput.value;
    const pariority = pariorityInput.value;

    if (title && description) {
      const projects = JSON.parse(localStorage.getItem('projects'));

      const newProject = new Project(title, description, pariority);
      projects.push(newProject);

      localStorage.setItem('projects', JSON.stringify(projects));
      // eslint-disable-next-line no-use-before-define
      deleteForm(e);

      renderProjects();
    } else {
      if (!title) {
        tWarning.style.display = 'block';

        setInterval(() => {
          tWarning.style.display = 'none';
        }, 6000);
      }

      if (!description) {
        dWarning.style.display = 'block';

        setTimeout(() => {
          dWarning.style.display = 'none';
        }, 6000);
      }
    }
  });

  function deleteForm2(e) {
    if (e.key === 'Escape') {
      container.remove();
    }

    document.removeEventListener('keydown', deleteForm2);
  }

  function deleteForm(e) {
    container.remove();
    e.target.removeEventListener('click', deleteForm);
    document.removeEventListener('keydown', deleteForm2);
  }

  cancel.addEventListener('click', deleteForm);

  document.addEventListener('keydown', deleteForm2);
};

export default projectForm;
