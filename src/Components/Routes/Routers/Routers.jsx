import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home/Home';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>

        }
      ]
    },
  ]);

export default Routers;