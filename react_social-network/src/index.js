import { store } from './miniRedux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.ZAGLUSHKA = 'https://www.meme-arsenal.com/memes/6bf688ba903a307a295ebf3a825d1be3.jpg' 
window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch = {store.dispatch.bind(store)} /> 
      {/*object.bind(store) - это передали указания 
в каком контексте выполнять функцию, из-за того, что мы 
передаём функцию как callback, контекст изначальный (под store) теряется,
поэтому когда функция addPost будет вызываться в логике, где прописано this._state будет undefined,
т.к. контекст исполнения был утерян, поэтому при помощи bind(context) указываем, в контексте какого объекта ему выполняться
в данной случае объекта store */}
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)