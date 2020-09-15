import template from './template';
import './BookDetail.scss';
import { removeChildNodes } from '../../../util/util';
import { Review } from '../Review';
import {Quote} from '../Quote';

function BookDetail(review, quotes) {
  const contentContainer = document.querySelector('.content-container');
  const bookDetail = document.createElement('div');
  bookDetail.className = 'book-detail';
  bookDetail.appendChild(new Review(review[0]));
  quotes.map(quote => bookDetail.appendChild(new Quote(quote)))


  removeChildNodes(contentContainer);
  contentContainer.appendChild(bookDetail);
  return bookDetail;
}

export default BookDetail;
