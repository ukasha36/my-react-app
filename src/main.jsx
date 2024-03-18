import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
 
import Team from './pages/Team.jsx';
import MainLayout from './Layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout/>,
    children:[
      {
      path: "/home",
      element: <Home/> 
    },
    {
      path: "/about",
      element: <About/> 
    },
    {
      path: "/team",
      element: <Team/> 
    }

    ]

  }
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <App/>
)
