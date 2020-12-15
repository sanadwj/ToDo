import todo from '../utils/todo';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE TO DO', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));
  it('Get title from toDo object', () => {
    expect(todo('title', 'descreption', '15/12/20', 1).title).toBe('title');
  });

  it('Get description from toDo object', () => {
    expect(todo('title', 'description', '15/12/20', 1).notes).toBe('description');
  });

  it('Get DueDate from toDo object', () => {
    expect(todo('title', 'description', '15/12/20', 1).dueDate).toBe('15/12/20');
  });

  it('Get priority from toDo object', () => {
    expect(todo('title', 'description', '15/12/20', 1).priority).toBe(1);
  });
});