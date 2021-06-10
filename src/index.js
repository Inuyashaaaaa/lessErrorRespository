import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import 'antd/dist/antd.css';
import store from "./modules";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
