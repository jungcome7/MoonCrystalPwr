import template from './template';
import './SubCategoryTab.scss';

function SubCategoryTab(text, id, onClickHandlerSub) {
  const subCategorytab = document.createElement('div');
  subCategorytab.className = 'sub-category-tab'
  subCategorytab.innerHTML = template(text);
  subCategorytab.addEventListener('click', () => onClickHandlerSub(id))

  return subCategorytab;
}

export default SubCategoryTab;
