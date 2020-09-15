import template from './template';
import './SideBar.scss';
import { MainCategoryTab } from '../../component-depth2/MainCategoryTab';
import { getMainCategories } from './../../../api/api'



async function SideBar(onClickHandler) {

  const mainCategories = await getMainCategories();
  
  const sidebarContainer = document.querySelector('.sidebar-container');
  sidebarContainer.appendChild(new MainCategoryTab('logo'));

  mainCategories.map((category) =>
    sidebarContainer.appendChild(
      new MainCategoryTab(category.title, category.id, onClickHandler)
    )
  );
}

export default SideBar;
