import template from './template';
import './BookCardSmall.scss';

function BookCardSmall(book) {
  const {id, title, author, press, page} = book
  const bookCardSmall = document.createElement('div');
  bookCardSmall.className = 'book-card-small'
  bookCardSmall.innerHTML = template(id, title, author, press, page);

  return bookCardSmall;
}

export default BookCardSmall;
