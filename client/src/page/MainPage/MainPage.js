import template from '../../page/MainPage/template';
import './MainPage.scss';
import { SideBar } from './../../component-depth1/SideBar';
import { Header } from './../../component-depth1/Header';
import { Content } from './../../component-depth1/Content';


function MainPage(app) {

  const state = {
    mainCategoryId: 1,
    subCategoryId: null,
  };

  function onClickHandler(id) {
    setMainCategoryId(id)
    new Header(state.mainCategoryId, onClickHandlerSub);
    new Content(state.mainCategoryId, state.subCategoryId);
  }

  function onClickHandlerSub(id) {
    setSubCategoryId(id)
    new Content(state.mainCategoryId, state.subCategoryId);
  }
  
  app.innerHTML = template;
  new SideBar(onClickHandler);
  new Header(state.mainCategoryId, onClickHandlerSub);
  new Content(state.mainCategoryId, state.subCategoryId);


  function setMainCategoryId(mainCategoryId) {
    state.mainCategoryId = mainCategoryId
    state.subCategoryId = null;
  }

  function setSubCategoryId(subCategoryId) {
    state.subCategoryId = subCategoryId
  }

}


export default MainPage;
