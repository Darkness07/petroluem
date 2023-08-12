import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/index';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<div>Loanding</div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  </Provider>
);
