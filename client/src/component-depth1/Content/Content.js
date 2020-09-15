import template from './template';
import './Content.scss';
import { BookCardSmall } from '../../component-depth2/BookCardSmall';
import { SummarySmall } from '../../component-depth2/SummarySmall';
import {getBooksByMainCategoryId, getBooksBySubCategoryId} from '../../../api/api'

async function Content(mainCategoryId, subCategoryId) {
  const contentContainer = document.querySelector('.content-container');
  
  let books;
  if(subCategoryId) {
    books = await getBooksBySubCategoryId(subCategoryId)
  } else {
    books = await getBooksByMainCategoryId(mainCategoryId)
  }
  const childNodesList = [...contentContainer.childNodes];
  childNodesList.map((node) => contentContainer.removeChild(node))
  books.map(book => {
    contentContainer.appendChild(new BookCardSmall(book))
  })
}

export default Content;
