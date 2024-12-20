import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

if (typeof window !== 'undefined') {
  const root = ReactDOMClient.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App {...window.initState} />
    </BrowserRouter>
  );
  delete window.initState;
}