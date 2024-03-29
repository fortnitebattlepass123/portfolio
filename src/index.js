import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reaper from './portfolio/Reaper';
import Personas from './portfolio/Personas';
import Responsive from './portfolio/Responsive';
import Chess from './portfolio/Chess';
import ReactPortfolio from './portfolio/ReactPortfolio';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/portfolio",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reaper",
    element: <Reaper />,
  },
  {
    path: "/personas",
    element: <Personas />,
  } ,
  {
    path: "/responsive",
    element: <Responsive />,
  },
  {
    path: "/react",
    element: <ReactPortfolio />,
  },
  {
    path: "/chess",
    element: <Chess />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
