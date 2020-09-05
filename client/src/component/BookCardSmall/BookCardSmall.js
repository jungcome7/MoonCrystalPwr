import template from './template';
import './BookCardSmall.scss';

function BookCardSmall(text) {
  const bookCardSmall = document.createElement('div');
  bookCardSmall.className = 'book-card-small'
  bookCardSmall.innerHTML = template(text);

  return bookCardSmall;
}

export default BookCardSmall;
