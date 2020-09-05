import template from './template';
import './SideBar.scss';
import { MainCategoryTab } from './../MainCategoryTab'

function SideBar() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    sidebarContainer.appendChild(new MainCategoryTab());
    sidebarContainer.appendChild(new MainCategoryTab());
    sidebarContainer.appendChild(new MainCategoryTab());
    sidebarContainer.appendChild(new MainCategoryTab());
}

export default SideBar;
