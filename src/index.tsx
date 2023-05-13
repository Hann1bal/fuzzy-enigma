import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from "./Stores/Store";
import {createRoot, Root} from "react-dom/client";


const store = new Store();
export const Context = createContext({store,})
const container = document.getElementById('root')
let root = createRoot(container!);
root.render(
    <Context.Provider value={{store: store}}>
        <div style={{width:"100%", height:"100%"}}><App/></div>
    </Context.Provider>,

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
