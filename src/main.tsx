import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import {Login} from "@/components/Login.tsx"
import {Register} from "@/components/Register.tsx"
import { CarouselDefault } from './components/homeCarrousel.tsx'



const router = createBrowserRouter([
  {
      path: '/login',
      element: <Login/> ,
  },
  {
      path: '/register',
      element: <Register/>
  },
  {
    path: '/',
    element: <CarouselDefault/>,
  }
]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App/>
    </ThemeProvider>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
