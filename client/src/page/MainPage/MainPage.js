import template from '../../page/MainPage/template';
import './MainPage.scss';
import { SideBar } from './../../component-depth1/SideBar';
import { Header } from './../../component-depth1/Header';
import { Content } from './../../component-depth1/Content';


function MainPage(app) {

  const state = {
    mainCategoryId: null,
    subCategoryId: null,
  };

  init();

  function init() {
    app.innerHTML = template;
    new SideBar(mainTabClickHandler);
    new Header(state, subTabClickHandler);
    new Content(state);
  }

  function mainTabClickHandler(id) {
    setMainCategoryId(id)
    new Header(state, subTabClickHandler);
    new Content(state);
  }

  function setMainCategoryId(id) {
    state.mainCategoryId = id
    state.subCategoryId = null;
  }

  function subTabClickHandler(id) {
    setSubCategoryId(id)
    new Content(state);
  }
  
  function setSubCategoryId(id) {
    state.subCategoryId = id
  }

}


export default MainPage;
