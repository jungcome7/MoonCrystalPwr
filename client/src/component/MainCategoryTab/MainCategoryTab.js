import template from './template';
import './MainCategoryTab.scss';

function MainCategoryTab(text) {
  const maincategoryTab = document.createElement('div');
  maincategoryTab.className = 'main-category-tab'
  maincategoryTab.innerHTML = template(text);

  return maincategoryTab;
}

export default MainCategoryTab;
