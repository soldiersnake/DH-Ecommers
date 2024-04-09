import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import './index.css'
import Home from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import Checkout from './pages/Checkout/Checkout.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <LayoutMain />,
    children: [
      {
        index: true, // se pone el index en TRUE para que sea el que siempre se llama como inicial
        element: <Home/>
      },
      {
        path: '/checkout',
        element: <Checkout/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
