import template from '../../page/MainPage/template';
import './MainPage.scss';
import { SideBar } from './../../component-depth1/SideBar';
import { Header } from './../../component-depth1/Header';
import { Content } from './../../component-depth1/Content';


function MainPage(app) {

  const state = {
    mainCategoryId: null,
  };

  function onClickHandler(id) {
    setState(id)
    new Header(state.mainCategoryId);
  }
  
  app.innerHTML = template;
  new SideBar(onClickHandler);
  new Header(state.mainCategoryId);
  // new Content();


  function setState(mainCategoryId) {
    state.mainCategoryId = mainCategoryId
  }

}


export default MainPage;
