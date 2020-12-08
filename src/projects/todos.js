/* eslint-disable import/no-cycle */
import 'bootstrap';
import todoForm from '../forms/todoForm';
import renderProjects from './projects';

import './collaps.css';

const todos = (project) => {
  const container = document.querySelector('#todos');
  container.innerHTML = '';

  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectIndex = Number(document.querySelector('#todos').getAttribute('data-project-index'));

  project.todos.forEach((t, index) => {
    const todosDiv = document.createElement('div');
    todosDiv.className = 'container flex flex-col justify-center border border-indigo-500 bg-indigo-500 text-white rounded-md py-2  my-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline';
    todosDiv.setAttribute('type', 'button');
    todosDiv.setAttribute('data-toggle', 'collapse');
    todosDiv.setAttribute('data-target', `#collapse-${index}`);
    todosDiv.setAttribute('aria-expanded', 'true');
    todosDiv.setAttribute('aria-controls', `collapse-${index}`);
    todosDiv.setAttribute('id', 'todosDiv');
    container.appendChild(todosDiv);


    const fDiv = document.createElement('div');
    fDiv.className = 'container flex justify-around';
    fDiv.setAttribute('id', `todo-${index}`);
    todosDiv.appendChild(fDiv);


    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = t.done;
    fDiv.appendChild(checkBox);


    const todoTitle = document.createElement('div');
    todoTitle.innerHTML = `${t.title}`;
    todoTitle.className = 'todoTitle';
    todoTitle.setAttribute('id', 'todoTitle');
    fDiv.appendChild(todoTitle);


    const editBtn = document.createElement('div');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.setAttribute('data-index', index);
    fDiv.appendChild(editBtn);


    const expand = document.createElement('div');
    expand.setAttribute('id', `collapse-${index}`);
    expand.setAttribute('aria-labelledby', `todo-${index}`);
    expand.setAttribute('data-parent', '#todosDiv');
    expand.className = 'collapse p-6';
    todosDiv.appendChild(expand);

    const sDiv = document.createElement('div');
    expand.appendChild(sDiv);


    const dueDate = document.createElement('div');
    sDiv.appendChild(dueDate);

    const dateFont = document.createElement('span');
    dateFont.innerHTML = '<i class="fas fa-calendar-alt"></i>';
    dateFont.className = 'mr-2';
    dueDate.appendChild(dateFont);

    const dateValue = document.createElement('span');
    dateValue.innerHTML = `${t.dueDate}`;
    dueDate.appendChild(dateValue);

    const br1 = document.createElement('br');
    sDiv.appendChild(br1);

    const notes = document.createElement('textarea');
    notes.className = 'mt-0  rounded-lg block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
    notes.innerHTML = `${t.notes}`;
    sDiv.appendChild(notes);

    const br2 = document.createElement('br');
    sDiv.appendChild(br2);


    const headerDiv = document.createElement('div');
    headerDiv.className = 'flex justify-between';
    sDiv.appendChild(headerDiv);


    const todoPriority = document.createElement('div');
    todoPriority.innerHTML = `${t.priority}`;
    headerDiv.appendChild(todoPriority);

    const trash = document.createElement('span');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.setAttribute('data-index', index);
    headerDiv.appendChild(trash);


    trash.addEventListener('click', (e) => {
      projects[projectIndex].todos = project.todos.filter(
        (todo, index) => index !== Number(e.target.getAttribute('data-index')),
      );

      localStorage.setItem('projects', JSON.stringify(projects));

      renderProjects(projects[projectIndex], projectIndex);
    });

    editBtn.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      todoForm(project, index);
    });

    checkBox.addEventListener('click', () => {
      t.done = !t.done;

      projects[projectIndex].todos[index].done = t.done;

      localStorage.setItem('projects', JSON.stringify(projects));
    });
  });
};

export default todos;