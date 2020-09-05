import template from './template';
import './MainCategoryTab.scss';

function MainCategoryTab(text) {
  const mainCategoryTab = document.createElement('div');
  mainCategoryTab.className = 'main-category-tab'
  mainCategoryTab.innerHTML = template(text);

  return mainCategoryTab;
}

export default MainCategoryTab;
