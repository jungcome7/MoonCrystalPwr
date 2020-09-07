import template from './template';
import './MainCategoryTab.scss';

function MainCategoryTab(text, id) {
  const mainCategoryTab = document.createElement('div');
  mainCategoryTab.className = 'main-category-tab'
  mainCategoryTab.dataset.id = id;
  mainCategoryTab.innerHTML = template(text);
  let clickedCategory;
  mainCategoryTab.addEventListener('click', (e) => clickedCategory = e.currentTarget.dataset.id)

  return mainCategoryTab;
}

export default MainCategoryTab;
