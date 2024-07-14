import { Navigate, createBrowserRouter } from "react-router-dom";

//user
//components
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
//pages
import Signup from "./views/Pages/Signup";
import Login from "./views/Pages/Login";
import NotFound from "./views/Pages/NotFound.jsx";
import Home from "./views/Pages/Home.jsx";
import Contact from"./views/Pages/Contact.jsx";
import About from "./views/Pages/About.jsx";
import ForgetPassword from "./views/Pages/ForgetPassword.jsx";
import UpdatePassword from "./views/Pages/UpdatePassword.jsx";
//category

//menu

//table

import Work from "./views/Pages/Work.jsx";


import Service from "./views/Pages/Service.jsx";
import Works from "./views/Pages/Works.jsx";
import Services from "./views/Pages/Services.jsx";

const router = createBrowserRouter([

  // Routes pour GuestLayout
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },

      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/forgetPassword',
        element:<ForgetPassword/>
      },
      {
        path:'/reset-password/:token/:email',
        element:<UpdatePassword/>
      },
   
      {
        path: '/work',
        element: <Work/>
      },
      {
        path: '/works/:id',
        element: <Works/>
      },{
        path: '/service',
        element: <Service/>
      },{
        path: '/services/:id',
        element: <Services/>
      },





    ],
  },




  // Routes pour DefaultLayout
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      },

      
     


    ]
  },




  // Route NotFound
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: '/home',
    element: <Home />
  },

]);

export default router;
