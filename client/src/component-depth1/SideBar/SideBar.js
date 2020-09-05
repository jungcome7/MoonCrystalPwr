import template from './template';
import './SideBar.scss';
import { MainCategoryTab } from '../../component-depth2/MainCategoryTab'

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/');
  const result = await res.json();
  return result;
};


async function SideBar() {
    const mainCategories = await fetchData()
    const sidebarContainer = document.querySelector('.sidebar-container');
    sidebarContainer.appendChild(new MainCategoryTab('logo'));

    mainCategories.map(category => sidebarContainer.appendChild(new MainCategoryTab(category.name)));
}

export default SideBar;
