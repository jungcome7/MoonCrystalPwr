import template from './template';
import './Content.scss';
import { BookCardSmall } from './../BookCardSmall';
import { SummarySmall } from './../SummarySmall';

function Content() {
  const contentContainer = document.querySelector('.content-container');
  contentContainer.appendChild(new BookCardSmall('Latest'));
  contentContainer.appendChild(new BookCardSmall('Most Popular'));
  contentContainer.appendChild(new BookCardSmall('Now Reading'));
  contentContainer.appendChild(new SummarySmall('Summary'));
}

export default Content;
