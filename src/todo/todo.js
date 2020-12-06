import todoForm from '../forms/todoForm';

const add = (project) => {
  const container = document.querySelector('#todos');
  
  const addTodo = document.createElement('button');
  addTodo.className = 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  addTodo.innerHTML = 'ADD';
  container.appendChild(addTodo);

  addTodo.addEventListener('click', () => {
    todoForm(project);
  });
};

export default add;