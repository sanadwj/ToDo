import Project from '../utils/project';
import '../tailwind.css';

const projectForm = () => {
  const { body } = document;
  const container = document.createElement('div');
  container.id = 'project-form';
  container.classList.add('container');


  const form = document.createElement('form');
  form.classList.add('form');
  container.appendChild(form);


  const header = document.createElement('h3');
  header.textContent = 'New Project';
  form.appendChild(header);

  const tDiv = document.createElement('div');
  tDiv.className = 'form-group';
  form.appendChild(tDiv);


  const tInput = document.createElement('input');
  tInput.id = 'title';
  tInput.classList.add('form-input');
  tInput.setAttribute('type', 'text');
  tInput.setAttribute('name', 'title');
  tDiv.appendChild(tInput);
  // tInput.setAttribute('aria-describedby', 'titleWarning');


  const tWarning = document.createElement('small');
  tWarning.id = 'tWarning';
  tWarning.className = 'form-text text-danger';
  tWarning.textContent = 'Project title should atleast have 5 characters';
  tWarning.style.display = 'none';
  tDiv.appendChild(tWarning);


  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('form');
  form.appendChild(descriptionDiv);


  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'discription';
  descriptionInput.classList.add('form-textarea', 'rounded-lg');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('rows', '3');
  descriptionDiv.appendChild(descriptionInput);


  const dWarning = document.createElement('small');
  dWarning.id = 'dnWarning';
  dWarning.textContent = 'Project Description should atleast have 10 characters';
  dWarning.style.display = 'none';
  descriptionDiv.appendChild(dWarning);


  const pariorityDiv = document.createElement('div');
  pariorityDiv.classList.add('form');
  form.appendChild(pariorityDiv);


  const pariorityInput = document.createElement('input');
  pariorityInput.id = 'pariority';
  pariorityInput.classList.add('form-input');
  pariorityInput.setAttribute('type', 'color');
  pariorityInput.setAttribute('name', 'project-color');
  pariorityInput.setAttribute('value', '#ff0017');
  pariorityDiv.appendChild(pariorityInput);


  const submit = document.createElement('button');
  submit.id = 'submit';
  submit.setAttribute('type', 'submit');
  submit.className = 'px-8 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  form.appendChild(submit);


  const close = document.createElement('span');
  form.appendChild(close);


  body.appendChild(container);



  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = tInput.value;
    const description = descriptionInput.value;
    const pariority = pariorityInput.value;

    if (title && description) {
      const projects = JSON.parse(localStorage.getItem('projects'));

      const newProject = Project(title, description, pariority);
      projects.push(newProject);

      localStorage.setItem('projects', JSON.stringify(projects));
      // deleteForm(e)

      // projectForm();
    } else {
      if (!title) {
        tWarning.style.display = 'block';

        setInterval(() => {
          tWarning.style.display = 'none';
        }, 6000);
      }

      if (description.length < 10) {
        dWarning.style.display = 'block';

        setTimeout(() => {
          dWarning.style.display = 'none';
        }, 8000);
      }
    }
  });

  return body;
};

projectForm();


export default projectForm;
