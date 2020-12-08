// eslint-disable-next-line import/no-cycle
import todoForm from '../forms/todoForm';

const add = (project) => {
  const container = document.querySelector('#todos');
  const addTodo = document.createElement('button');
  addTodo.className = 'flex px-8 py-4 mx-16 text-sm flex justify-center w-auto text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  addTodo.innerHTML = 'Add a ToDo';
  container.appendChild(addTodo);

  addTodo.addEventListener('click', () => {
    todoForm(project);
  });
};

export default add;