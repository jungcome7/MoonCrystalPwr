import template from './template';
import './SideBar.scss';
import { MainCategoryTab } from '../../component-depth2/MainCategoryTab';
import { getMainCategories } from './../../../api/api';

async function SideBar(mainTabClickHandler) {
  const sidebarContainer = document.querySelector('.sidebar-container');
  const mainCategories = await getMainCategories();
  
  mainCategories.map((category) =>
    sidebarContainer.appendChild(
      new MainCategoryTab(category, mainTabClickHandler)
    )
  );
}

export default SideBar;
