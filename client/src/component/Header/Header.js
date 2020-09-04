import template from './template';
import './Header.scss';

function Header() {
  const header = document.createElement('div');
  header.innerHTML = template;
  document.body.appendChild(header);
}

export default Header;
