import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UserContextProvider } from 'contexts/UserContext';
import makeServer from './server';

const root = createRoot(document.getElementById('root'));
if (process.env.NODE_ENV === 'development') makeServer();

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
