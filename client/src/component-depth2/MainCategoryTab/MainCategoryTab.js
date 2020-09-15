import template from './template';
import './MainCategoryTab.scss';
import { Header } from '../../component-depth1/Header';
import { setState } from './../../page/MainPage'

function MainCategoryTab(text, id, onClickHandler) {
  const state = {
    id: id,
  }

  const mainCategoryTab = document.createElement('div');
  mainCategoryTab.className = 'main-category-tab'
  mainCategoryTab.innerHTML = template(text);



  mainCategoryTab.addEventListener('click', () => onClickHandler(id))
  return mainCategoryTab;
}

export default MainCategoryTab;
