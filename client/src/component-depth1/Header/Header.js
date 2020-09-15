import template from './template';
import './Header.scss';
import { SubCategoryTab } from '../../component-depth2/SubCategoryTab';
import { getSubCategoriesByMainCategoryId } from '../../../api/api';

async function Header(mainCategoryId, onClickHandlerSub) {
  const headerContainer = document.querySelector('.header-container');
  const childNodesList = [...headerContainer.childNodes];
  childNodesList.map((node) => headerContainer.removeChild(node));

  const subCategories = await getSubCategoriesByMainCategoryId(mainCategoryId);

  subCategories.map((category) => {
    headerContainer.appendChild(
      new SubCategoryTab(category.title, category.id, onClickHandlerSub)
    );
  });
}

export default Header;
