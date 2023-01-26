import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from "../state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../sass/index.sass";

import { preload } from "swr";
import {
    getTodos,
    todosUrlEndpoint as cacheKey,
} from "../components/Todos/todosApi.jsx";

preload(cacheKey, getTodos);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
