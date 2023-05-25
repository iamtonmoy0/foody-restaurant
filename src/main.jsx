import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './pages/Error.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as RoutePath from './routes/routes.js'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Recipe from './pages/Recipe.jsx'



const routes=createBrowserRouter([
  {
    path:RoutePath.DASHBOARD,
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:RoutePath.DASHBOARD,
        element:<Home/>,
        loader:async ()=>{
          return fetch('https://recipe-server-ruby.vercel.app/chefs');
        }
      },
      {
        path:RoutePath.LOGIN,
        element:<Login/>,
      },
      {
        path:RoutePath.BLOG,
        element:<Blogs/>
      },
      {
        path:RoutePath.SIGNUP,
        element:<SignUp/>,
      },
      {
        path:RoutePath.Recipe,
        element:<Recipe/>,
        loader:({params})=>fetch(`https://recipe-server-ruby.vercel.app/recipe/${params.chef_id}`)

      }
    ]

  }
  

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
