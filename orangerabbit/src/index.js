import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Shophoodie from './components/FrontOffice/ShopHoodie';
import ShopBottom from './components/FrontOffice/ShopBottom';
import BackOffice from './components/backOffice/BackOffice';
import HoodieBackOffice from './components/backOffice/HoodieBackOfiice';
import BottomBackOffice from './components/backOffice/BottomBackOffice';
import ShopTest from './components/FrontOffice/Shop';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LogIn from './components/LogIn/Login';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShopTest />,
    },
    {
        path: "/ShopHoodie",
        element: <Shophoodie />,
      },
      {
        path: "/ShopBottom",
        element: <ShopBottom />,
      },
      {
        path: "/BackOffice",
        element: <BackOffice />,
      },
      {
        path: "/HoodieBackOffice",
        element: <HoodieBackOffice />,
      },
      {
        path: "/BottomBackOffice",
        element: <BottomBackOffice />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);


