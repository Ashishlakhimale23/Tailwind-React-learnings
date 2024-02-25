import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home.jsx'
import Contact from './components/contact.jsx'
import About from './components/about.jsx'
import Github from './components/github.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"About",
      element:<About/>
    },{
      path:"Contact",
      element:<Contact/>
    },{
      path:"Github",
      element:<Github/>
    }
  ]

  
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
