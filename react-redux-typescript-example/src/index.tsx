import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./store/reducer";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);