import template from './template';
import './SideBar.scss';
import { MainCategoryTab } from './../MainCategoryTab'

function SideBar() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    sidebarContainer.appendChild(new MainCategoryTab('logo'));
    sidebarContainer.appendChild(new MainCategoryTab('cat1'));
    sidebarContainer.appendChild(new MainCategoryTab('cat2'));
    sidebarContainer.appendChild(new MainCategoryTab('cat3'));
    sidebarContainer.appendChild(new MainCategoryTab('cat4'));
}

export default SideBar;
