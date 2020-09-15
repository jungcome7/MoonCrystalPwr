import template from './template';
import './MainCategoryTab.scss';

function MainCategoryTab(category, mainTabClickHandler) {
  const { id, title } = category;

  const mainCategoryTab = document.createElement('div');
  mainCategoryTab.className = 'main-category-tab';
  mainCategoryTab.innerHTML = template(title);

  mainCategoryTab.addEventListener('click', () => mainTabClickHandler(id));
  return mainCategoryTab;
}

export default MainCategoryTab;
