import template from './template';
import './Header.scss';
import { SubCategoryTab } from '../../component-depth2/SubCategoryTab';
import { getSubCategoriesByMainCategoryId } from '../../../api/api';
import { removeChildNodes } from '../../../util/util';

async function Header(state, subTabClickHandler) {
  const { mainCategoryId, subCategoryId } = state;
  const headerContainer = document.querySelector('.header-container');
  const subCategories = await getSubCategoriesByMainCategoryId(mainCategoryId);

  removeChildNodes(headerContainer);

  subCategories.map((category) => {
    headerContainer.appendChild(
      new SubCategoryTab(category, subTabClickHandler)
    );
  });
}

export default Header;
