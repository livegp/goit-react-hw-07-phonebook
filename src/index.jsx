import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import GlobalStyle from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/vite-react-start">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
