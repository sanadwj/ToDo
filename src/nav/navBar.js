import projectForm from '../forms/projectForm';

const navBar = () => {
  const { body } = document;
  const header = document.createElement('header');
  body.appendChild(header);


  const nav = document.createElement('nav');
  nav.className = 'flex justify-start items-center w-full bg-gray-700 shadow-lg';
  header.appendChild(nav);

  const addList = document.createElement('button');
  addList.innerHTML = 'New Project';
  addList.className = 'flex justify-start mr-40 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline';
  nav.appendChild(addList);

  const mainTitle = document.createElement('div');
  mainTitle.className = 'text-white text-center  p-0 font-light flex text-2xl';
  mainTitle.innerHTML = 'ToDo\'s';
  nav.appendChild(mainTitle);


  addList.addEventListener('click', () => {
    projectForm();
  });
  return header;
};

export default navBar;