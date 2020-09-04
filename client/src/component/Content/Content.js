import template from './template';
import './Content.scss';

function Content() {
  const contentContainer = document.querySelector('.content-container');
  contentContainer.innerHTML = template;
}

export default Content;
