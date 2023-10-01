import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Authprovider from './AuthProvider/Authprovider.jsx';
import Privetrouter from './components/Privetrouter.jsx';
import Dashboard from './components/Dashboard.jsx';
import { HelmetProvider } from 'react-helmet-async';
import SelectedJobs from './components/SelectedJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://api.slingacademy.com/v1/sample-data/photos'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/jobs',
        element: <Privetrouter><SelectedJobs></SelectedJobs></Privetrouter>
      },
      {
        path: '/dashboard',
        loader: () => fetch('https://dummyjson.com/users'),
        element: <Privetrouter><Dashboard></Dashboard> </Privetrouter>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)
