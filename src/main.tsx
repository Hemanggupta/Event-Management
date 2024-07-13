import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Import Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css';

// Import PrimeNG CSS
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css'; // core css

// Import custom CSS files
import './assets/custom-css/_custom.css';
import './assets/custom-css/_variable.css';

import { PrimeReactProvider } from 'primereact/api';

// PrimeReact configuration
const value = {
  ripple: true
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={value}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
