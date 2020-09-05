import template from './template';
import './SideBar.scss';
import { MainCategoryTab } from '../../component-depth2/MainCategoryTab'

function SideBar() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    sidebarContainer.appendChild(new MainCategoryTab('logo'));
    sidebarContainer.appendChild(new MainCategoryTab('catAll'));
    sidebarContainer.appendChild(new MainCategoryTab('cat1'));
    sidebarContainer.appendChild(new MainCategoryTab('cat2'));
    sidebarContainer.appendChild(new MainCategoryTab('cat3'));
    sidebarContainer.appendChild(new MainCategoryTab('cat5'));
    sidebarContainer.appendChild(new MainCategoryTab('cat6'));
    sidebarContainer.appendChild(new MainCategoryTab('cat7'));
    sidebarContainer.appendChild(new MainCategoryTab('cat8'));
    sidebarContainer.appendChild(new MainCategoryTab('cat9'));
}

export default SideBar;
