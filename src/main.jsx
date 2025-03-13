import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import { ModalProvider } from './context/ModalContext.jsx';
import { AlertProvider } from './context/AlertContext.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ModalProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ModalProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
