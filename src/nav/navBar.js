import projectForm from '../forms/projectForm';
import todos from '../projects/todos';

const navBar = () => {
  const { body } = document;
  const header = document.createElement('header');
  body.appendChild(header);


  const nav = document.createElement('nav');
  header.appendChild(nav);

  const addList = document.createElement('button');
  addList.className = 'px-8 py-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';
  nav.appendChild(addList);

  const mainTitle = document.createElement('div');
  mainTitle.classList.add('mainTitle');
  mainTitle.innerHTML = 'ToDo\'s';
  nav.appendChild(mainTitle);


  addList.addEventListener('click', () => {
    projectForm();
  });
  return header;
};

export default navBar;