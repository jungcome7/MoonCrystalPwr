import template from './template';
import './Quote.scss';
import {removeChildNodes} from '../../../util/util'

function Quote(review, quotes) {
  const contentContainer = document.querySelector('.content-container');
  const bookDetail = document.createElement('div');
  bookDetail.className = 'book-detail';
  bookDetail.innerHTML = template(review[0], quotes);

  removeChildNodes(contentContainer)
  contentContainer.appendChild(bookDetail);
  return bookDetail;
}

export default Quote;
