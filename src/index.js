import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from './redux/user/user.reducer';
import stepsReducer from "./redux/step/step.reducer";
import paymentsReducer from "./redux/payments/payment.reducer";
import searchBoxReducer from "./redux/searchBox/searchBox.reducer";
import tableDataReducer from "./redux/tableData/tableData.reducer";
import postReducer from "./redux/blog/post/post.reducer";

import logger from 'redux-logger';
import 'antd/dist/antd.css';
import ReduxThunk from 'redux-thunk';
import App from './App';
import commentsReducer from "./redux/blog/comment/comment.reducer";

const appReducers = combineReducers({
  user: userReducer,
  step: stepsReducer,
  payment: paymentsReducer,
  search: searchBoxReducer,
  table: tableDataReducer,
  post:postReducer,
  comment:commentsReducer
});

const store = process.env.NODE_ENV === 'development' ?
  createStore(appReducers,
    applyMiddleware(ReduxThunk, logger)) :
  createStore(appReducers,
    applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);