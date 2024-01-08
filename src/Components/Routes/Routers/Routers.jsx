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
          element: <AddServices></AddServices>
        },
        {
          path: 'my-services',
          element: <MyProducts></MyProducts>
        }
      ]
    }
  ]);

export default Routers;