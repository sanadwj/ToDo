// eslint-disable-next-line import/no-cycle
import renderProject from '../project/project';


const allProjects = (project = false, projectIndex = 0) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const container = document.querySelector('#projects-container');

  container.innerHTML = '';

  projects.forEach((project, index) => {
    const pcontainer = document.createElement('div');
    pcontainer.className = 'project-container cursor-pointer flex flex-row justify-around items-center h-16 px-4 rounded-lg text-gray-600 hover:bg-purple-100';
    container.appendChild(pcontainer);


    const pheader = document.createElement('div');
    pheader.className = 'pheader flex flex-row w-full justify-around items-center' ;
    pcontainer.appendChild(pheader);


    const ppariority = document.createElement('div');
    ppariority.className = 'ppariority h-4 w-4';
    ppariority.style.background = project.color;
    pheader.appendChild(ppariority);


    const ptitle = document.createElement('div');
    ptitle.className = 'ptitle text-xl text-purple-400';
    ptitle.innerHTML = `${project.title}`;
    pheader.appendChild(ptitle);


    const ptodos = document.createElement('div');
    ptodos.classList.add('todos', 'underline');
    ptodos.innerHTML = `${project.todos.length}`;
    pheader.appendChild(ptodos);


    const trash = document.createElement('div');
    trash.className = 'remove-btn text-purple-400';
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    pheader.appendChild(trash);


    trash.addEventListener('click', (e) => {
      localStorage.setItem(
        'projects',
        JSON.stringify(projects.slice(0, index).concat(projects.slice(index + 1))),
      );
      e.preventDefault();
      // eslint-disable-next-line no-undef
      window.location.reload();

      allProjects();
    });


    pcontainer.addEventListener('click', () => {
      renderProject(project, index);
    });
  });

  if (projects.length > 0) {
    renderProject(project || projects[0], projectIndex);
  }
};


export default allProjects;