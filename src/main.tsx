import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import './index.css'
import Checkout from './pages/Checkout/Checkout.tsx'
import Home from './pages/Home/Home.tsx'

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
