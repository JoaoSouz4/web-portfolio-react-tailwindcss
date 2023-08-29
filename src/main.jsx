import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ModalProvider } from './context/ModalContext.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ModalProvider>
        <App />
      </ModalProvider>
    ),
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
