import template from './template';
import './Header.scss';
import { SubCategoryTab } from '../../component-depth2/SubCategoryTab';

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/api/book/1');
  const result = await res.json();
  console.log(result);
  return result;
};

async function Header() {
  const headerContainer = document.querySelector('.header-container');

  const subCategories = await fetchData();

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
