
const todoForm = (project, idx = false) => {
  const { body } = document;


  const container = document.createElement('div');
  container.className = 'todo-container';
  container.setAttribute('id', 'todo-container');
  body.appendChild(container);


  const form = document.createElement('form');
  form.className = 'form py-12 grid grid-cols-1 gap-6';
  container.appendChild(form);


  const tHead = document.createElement('h3');
  tHead.className = 'text-2xl font-bold';
  tHead.innerHTML = 'New Todo';
  form.appendChild(tHead);


  const todoDiv = document.createElement('div');
  todoDiv.className = 'todoDiv';
  form.appendChild(todoDiv);


  const tlabel = document.createElement('label');
  tlabel.className = 'block tLabel text-gray-700';
  tlabel.setAttribute('for', 'title');
  tlabel.innerHTML = 'Title';
  todoDiv.appendChild(tlabel);


  const tInput = document.createElement('input');
  tInput.className = 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  tInput.setAttribute('type', 'text');
  tInput.setAttribute('name', 'title');
  tInput.setAttribute('id', 'todo-title');
  todoDiv.appendChild(tInput);

  const tWarning = document.createElement('small');
  tWarning.className = 'tWarning';
  tWarning.style.display = 'none';
  tWarning.innerHTML = 'Please enter a Title';
  todoDiv.appendChild(tWarning);


  const dateDive = document.createElement('div');
  dateDive.className = 'dateDiv';
  form.appendChild(dateDive);


  const dateLabel = document.createElement('label');
  dateLabel.className = 'block tLabel text-gray-700';
  dateLabel.setAttribute('for', 'date');
  dateLabel.innerHTML = 'Due Date';
  dateDive.appendChild(dateLabel);


  const dateInput = document.createElement('input');
  dateInput.className = 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('name', 'dateInput');
  dateInput.setAttribute('id', 'date');
  dateDive.appendChild(dateInput);


  const dateWarning = document.createElement('small');
  dateWarning.className = 'dateWarning';
  dateWarning.style.display = 'none';
  dateWarning.innerHTML = 'Please Enter a Date';
  dateDive.appendChild(dateWarning);


  const priorityDiv = document.createElement('div');
  priorityDiv.className = 'priorityDiv';
  form.appendChild(priorityDiv);


  const priorityLabel = document.createElement('label');
  priorityLabel.className = 'block tLabel text-gray-700';
  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.innerHTML = 'Priority';
  priorityDiv.appendChild(priorityLabel);


  const priorityInput = document.createElement('input');
  priorityInput.className = 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  priorityInput.setAttribute('name', 'priority');
  priorityInput.setAttribute('id', 'priority');
  priorityDiv.appendChild(priorityInput);


  const priorityHigh = document.createElement('option');
  priorityHigh.setAttribute('value', 'High');
  priorityHigh.textContent = 'High';
  priorityInput.appendChild(priorityHigh);


  const priorityMedium = document.createElement('option');
  priorityMedium.setAttribute('value', 'Medium');
  priorityMedium.textContent = 'Medium';
  priorityInput.appendChild(priorityMedium);


  const priorityLow = document.createElement('option');
  priorityLow.setAttribute('value', 'Low');
  priorityLow.textContent = 'Low';
  priorityInput.appendChild(priorityLow);


  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'descriptinDiv';
  form.appendChild(descriptionDiv);


  const descriptionLabel = document.createElement('label');
  descriptionLabel.className = 'block tLabel text-gray-700';
  descriptionLabel.setAttribute('for', 'description');
  descriptionDiv.appendChild(descriptionLabel);


  const descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black';
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('row', '3');
  descriptionInput.setAttribute('id', 'todo-description');
  descriptionDiv.appendChild(descriptionInput);

  const descriptionWarning = document.createElement('small');
  descriptionWarning.className = 'descriptionWarning';
  descriptionWarning.style.display = 'none';
  descriptionDiv.appendChild(descriptionWarning);


  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.innerHTML = `${idx} 'Edit' : 'Submit'`;
  form.appendChild(submitBtn);

  const closeBtn = document.createElement('span');
  form.appendChild(closeBtn);
};