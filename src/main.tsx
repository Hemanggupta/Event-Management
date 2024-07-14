import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Import PrimeNG CSS
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';

// Import custom CSS files
import './assets/custom-css/_custom.css';
import './assets/custom-css/_variable.css';

import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';

// PrimeReact configuration
const value = {
  ripple: true
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading</h1>}>
        <PrimeReactProvider value={value}>
          <App />
        </PrimeReactProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
