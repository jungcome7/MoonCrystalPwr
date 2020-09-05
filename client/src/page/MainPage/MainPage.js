import template from '../../page/MainPage/template';
import './MainPage.scss';
import { SideBar } from './../../component-depth1/SideBar';
import { Header } from './../../component-depth1/Header';
import { Content } from './../../component-depth1/Content';

function MainPage(app) {
  app.innerHTML = template;
  new SideBar();
  new Header();
  new Content();
}

export default MainPage;
