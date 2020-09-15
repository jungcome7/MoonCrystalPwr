import template from './template';
import './SubCategoryTab.scss';

function SubCategoryTab(category, subTabClickHandler) {
  const { id, title } = category;
  const subCategorytab = document.createElement('div');
  subCategorytab.className = 'sub-category-tab';
  subCategorytab.innerHTML = template(title);
  subCategorytab.addEventListener('click', () => subTabClickHandler(id));

  return subCategorytab;
}

export default SubCategoryTab;
