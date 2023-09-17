import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

export enum PATHS {
  MAIN = '/',
  REACT = '/react',
  VITE = '/vite'
}

const router = createBrowserRouter([
  {
    path: PATHS.MAIN,
    element: <App />,
  },
  {
    path: PATHS.REACT,
    element: <App />,
  },
  {
    path: PATHS.VITE,
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
