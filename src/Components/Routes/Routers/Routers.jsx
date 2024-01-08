import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import AddServices from '../../Dashboard/AddServices/AddServices';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/Register',
          element: <Register></Register>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      children:[
        {
          path: 'add-services',
          element: <AddServices></AddServices>
        }
      ]
    }
  ]);

export default Routers;