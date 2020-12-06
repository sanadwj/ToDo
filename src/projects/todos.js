
import todoForm from '../forms/todoForm';
import renderProjects from './projects';

const todos = (project) => {
  const container = document.querySelector('#todos');
  container.innerHTML = '';

  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectIndex = Number(document.querySelector('#todos').getAttribute('data-project-index'));

  project.todos.forEach((t, index) => {
    const todosDiv = document.createElement('div');
    todosDiv.className = '';
    todosDiv.setAttribute('type', 'button');
    todosDiv.setAttribute('data-toggle', 'collapse');
    todosDiv.setAttribute('data-target', `#collapse-${index}`); // value should target collapse ID
    todosDiv.setAttribute('aria-expanded', 'true');
    todosDiv.setAttribute('aria-controls', `collapse-${index}`);
    todosDiv.setAttribute('id', 'todosDiv');
    container.appendChild(todosDiv);

    const fDiv = document.createElement('div');
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
    expand.setAttribute('id', `expand-${index}`);
    expand.setAttribute('aria-labelledby', `todo-${index}`); // value should target cardheader ID
    expand.setAttribute('data-parent', '#todosDiv');

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

  });
};

export default todos;