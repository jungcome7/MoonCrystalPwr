import template from './template';
import './BookCard.scss';
import { getReviewByBookId, getQuotesByBookId } from '../../../api/api';
import { BookDetail } from '../BookDetail';

async function BookCard(book) {
  const { id, title, author, press, page } = book;
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.innerHTML = template(id, title, author, press, page);

  bookCard.addEventListener('click', async () => await bookCardClickHandler(id));

  return bookCard;
}

async function bookCardClickHandler(id) {
  const review = await getReviewByBookId(id);
  const quotes = await getQuotesByBookId(id);
  new BookDetail(review, quotes)
}

export default BookCard;
