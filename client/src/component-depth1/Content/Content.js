import template from './template';
import './Content.scss';
import { BookCardSmall } from '../../component-depth2/BookCardSmall';
import { SummarySmall } from '../../component-depth2/SummarySmall';

const fetchData = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/book/main/${mainCategoryId}`
  );
  const result = await res.json();
  return result;
};

const fetchDataSub = async (subCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/book/sub/${subCategoryId}`
  );
  const result = await res.json();
  return result;
};

async function Content(mainCategoryId, subCategoryId) {
  const contentContainer = document.querySelector('.content-container');
  
  let books;
  if(subCategoryId) {
    books = await fetchDataSub(subCategoryId)
  } else {
    books = await fetchData(mainCategoryId)
  }
  const childNodesList = [...contentContainer.childNodes];
  childNodesList.map((node) => contentContainer.removeChild(node))
  books.map(book => {
    contentContainer.appendChild(new BookCardSmall(book))
  })
}

export default Content;
