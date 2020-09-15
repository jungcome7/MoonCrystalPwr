import template from './template';
import './Review.scss';

function Review(review) {
  const reviewElement = document.createElement('div');
  reviewElement.className = 'review';
  reviewElement.innerHTML = template(review);

  return reviewElement;
}

export default Review;
