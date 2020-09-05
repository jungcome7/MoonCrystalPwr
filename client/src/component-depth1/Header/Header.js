import template from './template';
import './Header.scss';
import { SubCategoryTab } from '../../component-depth2/SubCategoryTab'

function Header() {
  const headerContainer = document.querySelector('.header-container');
  headerContainer.appendChild(new SubCategoryTab('subCat1'));
  headerContainer.appendChild(new SubCategoryTab('subCat2'));
  headerContainer.appendChild(new SubCategoryTab('subCat3'));
  headerContainer.appendChild(new SubCategoryTab('subCat4'));
  headerContainer.appendChild(new SubCategoryTab('subCat5'));
}

export default Header;
