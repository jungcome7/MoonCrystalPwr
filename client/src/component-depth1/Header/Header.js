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
  const childNodesList = [...headerContainer.childNodes];
  childNodesList.map((node) => headerContainer.removeChild(node));

  const subCategories = await fetchData(mainCategoryId);

  subCategories.map((category) => {
    headerContainer.appendChild(new SubCategoryTab(category.title));
  });
}

export default Header;
