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
    todosDiv.className = 'container flex';
    todosDiv.setAttribute('type', 'button');
    todosDiv.setAttribute('data-toggle', 'collapse');
    todosDiv.setAttribute('data-target', `#collapse-${index}`); // value should target collapse ID
    todosDiv.setAttribute('aria-expanded', 'true');
    todosDiv.setAttribute('aria-controls', `collapse-${index}`);
    todosDiv.setAttribute('id', 'todosDiv');
    container.appendChild(todosDiv);

    // const ex = document.createElement('div');
    // ex.setAttribute('type', 'button');
    // ex.setAttribute('data-toggle', 'collapse');
    // ex.setAttribute('data-target', `collapse-${index}`); // value should target collapse ID
    // ex.setAttribute('aria-expanded', 'true');
    // ex.setAttribute('aria-controls', `collapse-${index}`);
    // ex.className = 'text-3xl'
    // ex.innerHTML = '<i class="fas fa-bars"></i>'
    // todosDiv.appendChild(ex)


    const fDiv = document.createElement('div');
    fDiv.className = 'container flex';
    fDiv.setAttribute('id', `todo-${index}`);
    todosDiv.appendChild(fDiv);

    const angleRight = document.createElement('div');
    angleRight.innerHTML = '<i class="fas fa-angle-right"></i>';
    angleRight.style.display = 'block';
    fDiv.appendChild(angleRight);


    const angleDown = document.createElement('div');
    angleDown.innerHTML = '<i class="fas fa-angle-down"></i>';
    angleDown.style.display = 'none';
    fDiv.appendChild(angleDown);


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


    // const bars = document.createElement('div');
    // bars.innerHTML = '<i class="fas fa-bars"></i>';

    const expand = document.createElement('div'); // append to todosdiv
    expand.setAttribute('id', `collapse-${index}`);
    expand.setAttribute('aria-labelledby', `todo-${index}`); // value should target cardheader ID
    expand.setAttribute('data-parent', '#todosDiv');
    expand.className = 'collapse';
    todosDiv.appendChild(expand);

    const sDiv = document.createElement('div');
    expand.appendChild(sDiv);


    const dueDate = document.createElement('div');
    sDiv.appendChild(dueDate);

    const dateFont = document.createElement('span');
    dateFont.innerHTML = '<i class="fas fa-calendar-alt"></i>';
    dueDate.appendChild(dateFont);

    const dateValue = document.createElement('span');
    dateValue.innerHTML = `${t.dueDate}`;
    dueDate.appendChild(dateValue);

    const br1 = document.createElement('br');
    sDiv.appendChild(br1);

    const notes = document.createElement('textarea');
    notes.innerHTML = `${t.notes}`;
    sDiv.appendChild(notes);

    const br2 = document.createElement('br');
    sDiv.appendChild(br2);


    const headerDiv = document.createElement('div');
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