import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import saveState, {persistedState} from "./commonHelpers/localStorage";

const store = createStore(
  rootReducer,
    persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState({addEmployees: store.getState().addEmployees})
});

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(application, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
