import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from 'contexts/UserContext';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
