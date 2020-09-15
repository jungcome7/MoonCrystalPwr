import template from './template';
import './BookCard.scss';

function BookCard(book) {
  const {id, title, author, press, page} = book
  const BookCard = document.createElement('div');
  BookCard.className = 'book-card-small'
  BookCard.innerHTML = template(id, title, author, press, page);

  return BookCard;
}

export default BookCard;
