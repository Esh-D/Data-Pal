import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home.tsx';
import CalendarView from "./pages/CalendarView/CalendarView.tsx"
import Dashboard from "./pages/Dashboard/Dashboard.tsx"
import Insights from "./pages/Insights/Insights.tsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "insights",
    element: <Insights />
  },
  {
    path: "calendar-view",
    element: <CalendarView />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* 
Router Notes:
  adding error handling (inside router objects): 
    errorElement: <ErrorPage />  

  implementing child routes (inside router objects):
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  
  for navigating between routes, use 
    <Link to={`dashboard`}>Go to Dashboard</Link> in the page
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
