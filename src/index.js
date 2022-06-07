import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from 'contexts/UserContext';
import makeServer from './server';
import App from './App';

const root = createRoot(document.getElementById('root'));
if (process.env.NODE_ENV === 'development') makeServer();

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
