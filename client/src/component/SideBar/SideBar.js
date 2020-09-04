import template from './template';
import './SideBar.scss';

function SideBar() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    sidebarContainer.innerHTML = template;
}

export default SideBar;
