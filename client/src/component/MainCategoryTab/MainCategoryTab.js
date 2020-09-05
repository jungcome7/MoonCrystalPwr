import template from './template';
import './MainCategoryTab.scss';

function MainCategoryTab() {
  const maincategoryTab = document.createElement('div');
  maincategoryTab.innerHTML = template;
  return maincategoryTab;
}

export default MainCategoryTab;
