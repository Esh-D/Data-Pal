import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './pages/Root/Root.tsx';
import EntriesPage from "./pages/EntriesPage/EntriesPage.tsx"
import Dashboard from "./pages/Dashboard/Dashboard.tsx"
import Insights from "./pages/Insights/Insights.tsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      //will add a banner reminder to complete daily survey if they have not done so
      {
        path: "daily-survey",
        element: <div>Daily Survey Page</div>
      },
      {
        path: "templates", 
        element: <div>Edit, Create, Delete, and choose current Survey Template for Daily Survey</div>
      },
      //Note: might combine daily-survey with templates page, and make the daily-survey a pop-up modal
      {
        path: "entries",
        element: <EntriesPage />
      },
      {
        path: "insights",
        element: <Insights />
      },
      //Insights is a possible Machine Learning feature
    ]
  },
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
