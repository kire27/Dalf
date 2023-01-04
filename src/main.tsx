import React from "react";
import ReactDOM from "react-dom/client";
import { WrappedApp } from "./App";
import "./sass/index.sass";
import { store } from "./state/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
