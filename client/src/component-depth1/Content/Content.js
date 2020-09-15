import template from './template';
import './Content.scss';
import { BookCardSmall } from '../../component-depth2/BookCardSmall';
import { SummarySmall } from '../../component-depth2/SummarySmall';

const fetchData = async (mainCategoryId) => {
  const res = await fetch(
    `http://localhost:3000/api/book/${mainCategoryId}`
  );
  const result = await res.json();
  return result;
};

async function Content(mainCategoryId) {
  const contentContainer = document.querySelector('.content-container');

  const books = await fetchData(mainCategoryId)

  const childNodesList = [...contentContainer.childNodes];
  childNodesList.map((node) => contentContainer.removeChild(node))
  console.log(books)
  books.map(book => {
    contentContainer.appendChild(new BookCardSmall(book))
  })
}

export default Content;
