import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Components/Routes/Routers/Routers.jsx';
import AuthProvider from './Components/Sharde/AuthProvider/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={Routers} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
