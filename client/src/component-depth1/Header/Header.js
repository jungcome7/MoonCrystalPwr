import template from './template';
import './Header.scss';
import { SubCategoryTab } from '../../component-depth2/SubCategoryTab';

const fetchData = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/main-category/${mainCategoryId}/sub-category`
  );
  const result = await res.json();
  return result;
};

async function Header(mainCategoryId) {
  const headerContainer = document.querySelector('.header-container');

  const subCategories = await fetchData(mainCategoryId);

  subCategories.map((category) =>
    headerContainer.appendChild(new SubCategoryTab(category.title))
  );

  // headerContainer.appendChild(new SubCategoryTab('subCat1'));
  // headerContainer.appendChild(new SubCategoryTab('subCat2'));
  // headerContainer.appendChild(new SubCategoryTab('subCat3'));
  // headerContainer.appendChild(new SubCategoryTab('subCat4'));
  // headerContainer.appendChild(new SubCategoryTab('subCat5'));
}

export default Header;
