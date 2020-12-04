import projectForm from '../forms/projectForm';

const navBar = () => {
  const header = document.createElement('header');


  const nav = document.createElement('nav');
  header.appendChild(nav);

  const addList = document.createElement('button');
  addList.classList.add('add');
  nav.appendChild(addList);

  const mainTitle = document.createElement('div');
  mainTitle.classList.add('mainTitle');
  mainTitle.innerHTML = 'ToDo\'s';
  nav.appendChild(mainTitle);


  addList.addEventListener('click', () => {
    projectForm();
  });
};