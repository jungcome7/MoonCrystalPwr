import template from './template';

function Header() {
  const header = document.createElement('div');
  header.innerHTML = template;
  document.body.appendChild(header);
}

export default Header;
