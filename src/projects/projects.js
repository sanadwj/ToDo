
const projects = (project = false, pIdx = 0) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const container = document.getElementById('pContainer');

  container.innerHTML = '';

  projects.forEach((project, idx) => {
    const pcontainer = document.createElement('div');
    pcontainer.classList.add('project-container');
    container.appendChild(pcontainer);


    const pheader = document.createElement('div');
    pheader.classList.add('pheader');
    pcontainer.appendChild(pheader);


    const ppariority = document.createElement('div');
    ppariority.classList.add('ppariority');
    ppariority.style.background = project.color;
    pheader.appendChild(ppariority);


    const ptitle = document.createElement('div');
    ptitle.classList.add('ptitle');
    ptitle.innerHTML = `${project.title}`;
    pheader.appendChild(ptitle);


    const ptodos = document.createElement('div');
    ptodos.classList.add('Otodos');
    ptodos.innerHTML = `${project.todos.length}`;
    pheader.appendChild(ptodos);


    const trashIcon = document.createElement('div');
    trashIcon.className = 'remove-btn';
    pcontainer.appendChild(trashIcon);


    trashIcon.addEventListener('click', () => {
      localStorage.setItem(
        'projects',
        JSON.stringify(projects.slice(0, idx).concat(projects.slice(idx + 1))),
      );

      renderProjects();
    });

    ptitle.addEventListener('click', (e) => {
      const selected = document.querySelector('#projects-container .selected');
      if (selected) {
        selected.classList.remove('selected');
      }

      e.target.classList.add('selected');
      renderProject(project, idx);
    });
  });

  if (projects.length > 0) {
    renderProject(project || projects[0], pIdx);
  }
} 