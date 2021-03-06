/**
 * Created by limuzi on 2017/6/20.
 */
import * as types from './sf-type'
import axios from 'axios'
const actions = {
  [types.MENU_TAB_LIST]({commit}){
    axios.get('/api/tab')
      .then(function (response) {
        commit(types.MENU_TAB_LIST, response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  [types.NAV_TAB_LIST]({commit}){
    axios.get('/api/nav')
      .then(function (response) {
        commit(types.NAV_TAB_LIST, response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  [types.GET_ARTICLE_LIST]({commit}){
    axios.get('/api/article')
      .then(function (response) {
        commit(types.GET_ARTICLE_LIST, response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  [types.GET_LABEL_LIST]({commit}){
    axios.get('/api/labelList')
      .then(function (response) {
        commit(types.GET_LABEL_LIST, response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  [types.GET_MESSAGE_LIST]({commit}){
    axios.get('/api/message')
      .then(function (response) {
        console.log(response.data.data);
        commit(types.GET_MESSAGE_LIST, response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default actions
