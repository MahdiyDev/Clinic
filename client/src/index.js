import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/Auth';
import { AdminController } from './context/Admin'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AdminController>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AdminController>
  </React.StrictMode>,
  document.getElementById('root')
);
