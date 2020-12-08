import Todo from '../utils/todo';

// eslint-disable-next-line import/no-cycle
import renderProjects from '../projects/projects';
import './forms.css';

const todoForm = (project, index = false) => {
  const { body } = document;
  body.className = 'relative';


  const container = document.createElement('div');
  container.className = 'todo-container ';
  container.setAttribute('id', 'todo-container');
  body.appendChild(container);


  const form = document.createElement('form');
  form.className = 'form  grid grid-cols-1 bg-purple-50 gap-6 w-80 abs p-2.5 rounded-lg';
  container.appendChild(form);


  const tHead = document.createElement('h3');
  tHead.className = 'text-2xl font-bold';
  form.appendChild(tHead);


  const todoDiv = document.createElement('div');
  todoDiv.className = 'todoDiv';
  form.appendChild(todoDiv);


  const tlabel = document.createElement('label');
  tlabel.className = 'block tLabel text-gray-700';
  tlabel.setAttribute('for', 'title');
  tlabel.innerHTML = 'Title';
  todoDiv.appendChild(tlabel);


  const tInput = document.createElement('input');
  tInput.className = 'mt-0 rounded-lg block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  tInput.setAttribute('type', 'text');
  tInput.setAttribute('name', 'title');
  tInput.setAttribute('id', 'todo-title');
  todoDiv.appendChild(tInput);

  const tWarning = document.createElement('small');
  tWarning.className = 'tWarning';
  tWarning.style.display = 'none';
  tWarning.innerHTML = 'Please enter a Title';
  todoDiv.appendChild(tWarning);


  const dateDive = document.createElement('div');
  dateDive.className = 'dateDiv';
  form.appendChild(dateDive);


  const dateLabel = document.createElement('label');
  dateLabel.className = 'block tLabel text-gray-700';
  dateLabel.setAttribute('for', 'date');
  dateLabel.innerHTML = 'Due Date';
  dateDive.appendChild(dateLabel);


  const dateInput = document.createElement('input');
  dateInput.className = 'mt-0 rounded-lg block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('name', 'dateInput');
  dateInput.setAttribute('id', 'date');
  dateDive.appendChild(dateInput);


  const dateWarning = document.createElement('small');
  dateWarning.className = 'dateWarning';
  dateWarning.style.display = 'none';
  dateWarning.innerHTML = 'Please Enter a Date';
  dateDive.appendChild(dateWarning);


  const priorityDiv = document.createElement('div');
  priorityDiv.className = 'priorityDiv';
  form.appendChild(priorityDiv);


  const priorityLabel = document.createElement('label');
  priorityLabel.className = 'block tLabel text-gray-700';
  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.innerHTML = 'Priority';
  priorityDiv.appendChild(priorityLabel);


  const priorityInput = document.createElement('select');
  priorityInput.className = 'mt-0 rounded-lg block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  priorityInput.setAttribute('name', 'priority');
  priorityInput.setAttribute('id', 'priority');
  priorityDiv.appendChild(priorityInput);


  const priorityHigh = document.createElement('option');
  priorityHigh.setAttribute('value', 'High');
  priorityHigh.textContent = 'High';
  priorityInput.appendChild(priorityHigh);


  const priorityMedium = document.createElement('option');
  priorityMedium.setAttribute('value', 'Medium');
  priorityMedium.textContent = 'Medium';
  priorityInput.appendChild(priorityMedium);


  const priorityLow = document.createElement('option');
  priorityLow.setAttribute('value', 'Low');
  priorityLow.textContent = 'Low';
  priorityInput.appendChild(priorityLow);


  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'descriptinDiv';
  form.appendChild(descriptionDiv);


  const descriptionLabel = document.createElement('label');
  descriptionLabel.className = 'block tLabel text-gray-700';
  descriptionLabel.setAttribute('for', 'description');
  descriptionDiv.appendChild(descriptionLabel);


  const descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'mt-0 rounded-lg block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('row', '3');
  descriptionInput.setAttribute('id', 'todo-description');
  descriptionDiv.appendChild(descriptionInput);

  const descriptionWarning = document.createElement('small');
  descriptionWarning.className = 'descriptionWarning';
  descriptionWarning.style.display = 'none';
  descriptionDiv.appendChild(descriptionWarning);


  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.textContent = index ? 'Edit' : 'Submit';
  submitBtn.className = 'px-8 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  form.appendChild(submitBtn);

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = 'Cancel';
  closeBtn.className = 'px-8 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  form.appendChild(closeBtn);


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

  function showWarning(element) {
    element.style.display = 'block';

    setTimeout(() => {
      element.style.display = 'none';
    }, 6000);
  }

  closeBtn.addEventListener('click', deleteForm);


  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const title = tInput.value;
    const description = descriptionInput.value;
    const duedate = dateInput.value;
    const priority = priorityInput.value;

    if (title && description && duedate !== '') {
      const container = document.getElementById('todos');
      const projectIndex = Number(container.getAttribute('data-project-index'));

      const newTodo = Todo(title, description, duedate, priority);

      if (index) {
        project.todos[index] = newTodo;
      } else {
        project.todos.push(newTodo);
      }

      const projects = JSON.parse(localStorage.getItem('projects'));
      projects[projectIndex] = project;

      localStorage.setItem('projects', JSON.stringify(projects));

      deleteForm(e);

      renderProjects(projects[projectIndex], projectIndex);
    } else {
      if (!title) {
        showWarning(tWarning, tInput);
      } if (!description) {
        showWarning(descriptionWarning, descriptionInput);
      } if (duedate === '') {
        showWarning(dateWarning, dateInput);
      }
    }
  });

  if (index) {
    tInput.value = project.todos[index].title;

    switch (project.todos[index].priority) {
      case 'high':
        priorityHigh.setAttribute('selected', 'true');
        break;
      case 'medium':
        priorityMedium.setAttribute('selected', 'true');
        break;
      case 'low':
        priorityLow.setAttribute('selected', 'true');
        break;
      default:
        break;
    }

    dateInput.value = project.todos[index].dueDate;
    descriptionInput.value = project.todos[index].description;
  }
};

export default todoForm;