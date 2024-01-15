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
import Accounts from '../../Pages/Home/Accounts/Accounts';
import MyProducts from '../../Dashboard/MyProducts/MyProducts';
import AdminRoute from '../../Sharde/AdminRoute/AdminRoute';

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
            path: '/accounts',
            element: <Accounts/>,
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
          element: <AdminRoute><AddServices></AddServices></AdminRoute>
        },
        {
          path: 'my-services',
          element: <AdminRoute><MyProducts></MyProducts></AdminRoute>
        }
      ]
    }
  ]);

export default Routers;