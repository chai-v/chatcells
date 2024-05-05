import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

import { Details } from './pages/details/Details.jsx'
import { Dashboard } from './pages/dashboard/Dashboard.jsx'
import { Links } from './pages/links/Links.jsx'
import { Summary } from './pages/summary/Summary.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/details",
        element: <Details/>
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
      {
        path:"/summary",
        element: <Summary/>
      },
      {
        path: "/links",
        element: <Links/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
