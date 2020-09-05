import template from './template';
import './SubCategoryTab.scss';

function SubCategoryTab(text) {
  const subCategorytab = document.createElement('div');
  subCategorytab.className = 'sub-category-tab'
  subCategorytab.innerHTML = template(text);

  return subCategorytab;
}

export default SubCategoryTab;
