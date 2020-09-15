import template from './template';
import './Quote.scss';

function Quote(quote) {
  const quoteElement = document.createElement('div');
  quoteElement.className = 'quote';
  quoteElement.innerHTML = template(quote);

  return quoteElement;
}

export default Quote;
