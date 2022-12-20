import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom" 
import {Provider} from "react-redux"
import store from "./Redux/Store/store"
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-bv6l6tz0femkxsij.us.auth0.com" clientId='2tRzFhesnUu3k19ubOO3f8Y8c0lbbiGf' redirectUri={window.location.origin}>
      <Provider store={store}>
        <BrowserRouter>
          <App />   
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
