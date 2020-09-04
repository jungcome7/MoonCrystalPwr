import template from './template';
import './Header.scss';

function Header() {
  const headerContainer = document.querySelector('.header-container');
  headerContainer.innerHTML = template;
}

export default Header;
