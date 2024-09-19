import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// pages
import Index from './Index';
import Home from './Main/Home';
import Introduce from './Main/Introduce';
import Expert from './Main/Expert';
import Chart from './Main/Chart';
import { ScrollContextProvider } from '../contexts/scrollContext/scrollContext';

// widget


function Router(props) {

  const router = createBrowserRouter([{
    path : '/',
    element : <Index />,
    children : [
      {
        index : true,
        element : <Home />
      },
      {
        path : '/introduce',
        element : <Introduce />
      },
      {
        path : '/expert',
        element : <Expert />
      },
      {
        path : '/chart',
        element : <Chart />
      }
    ]
  }])

  return (
    <>
      <ScrollContextProvider >
        <RouterProvider router={router}/>
      </ScrollContextProvider>
    </>
  );
}

export default Router;