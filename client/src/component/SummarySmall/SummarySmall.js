import template from './template';
import './SummarySmall.scss';

function SummarySmall(text) {
  const summarySmall = document.createElement('div');
  summarySmall.className = 'summary-small'
  summarySmall.innerHTML = template(text);

  return summarySmall;
}

export default SummarySmall;
