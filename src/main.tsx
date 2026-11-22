import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource-variable/inter';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/css/academicons.min.css';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
