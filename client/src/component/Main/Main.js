import template from './template';
import './Main.scss';

function Main() {
  const main = document.createElement('div');
  main.innerHTML = template;
  document.body.appendChild(main);
}

export default Main;
