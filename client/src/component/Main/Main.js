import template from './template';

function Main() {
  const main = document.createElement('div');
  main.innerHTML = template;
  document.body.appendChild(main);
}

export default Main;
