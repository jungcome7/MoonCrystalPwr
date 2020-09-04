import template from '../../page/MainPage/template';
import './MainPage.scss';
import { SideBar } from './../../component/SideBar';
import { Header } from './../../component/Header';
import { Content } from './../../component/Content';

function MainPage(app) {
  app.innerHTML = template;
  new SideBar();
  new Header();
  new Content();
}

export default MainPage;
