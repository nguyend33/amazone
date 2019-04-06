import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./components/providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);



