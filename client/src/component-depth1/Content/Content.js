import template from './template';
import './Content.scss';
import { BookCard } from '../../component-depth2/BookCard';
import {
  getBooksByMainCategoryId,
  getBooksBySubCategoryId,
} from '../../../api/api';
import { removeChildNodes } from '../../../util/util';

async function Content(state) {
  const { mainCategoryId, subCategoryId } = state;
  const contentContainer = document.querySelector('.content-container');
  const books = await switchDataFetching(subCategoryId, mainCategoryId);
  removeChildNodes(contentContainer);
  books.map(async (book) => contentContainer.appendChild(await new BookCard(book)));
}

async function switchDataFetching(id1, id2) {
  let result;
  id1
    ? (result = await getBooksBySubCategoryId(id1))
    : (result = await getBooksByMainCategoryId(id2));
  return result;
}

export default Content;
