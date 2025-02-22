import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgetPass from './components/ForgetPass.jsx'
import Register from './components/Register.jsx'
import Signin from './components/Signin.jsx'
import './index.css'
import Aboutus from './pages/Aboutus.jsx'
import Affiliate from './pages/Affiliate.jsx'
import Home from './pages/Home.jsx'
import Staking from './pages/Staking.jsx'

const allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element: <Signin/>
    },
    {
      path:'/register',
      element: <Register/>
    },
    {
      path:'/home',
      element: <Home/>
    },
    {
      path:'/staking',
      element: <Staking/>
    },
    {
      path:'/about',
      element: <Aboutus/>
    },
    {
      path:'/affiliate',
      element: <Affiliate/>
    },
    {
      path:'/forget-pass',
      element: <ForgetPass/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={allRoutes}/>
  </StrictMode>,
)
