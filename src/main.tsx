import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import './index.css'
import Cart from './pages/Cart/Cart.tsx'
import Home from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <LayoutMain />,
    children: [
      {
        index: true, // se pone el index en TRE para que sea el que siempre se llama como inicial
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
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
