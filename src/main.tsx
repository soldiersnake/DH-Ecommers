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
import Login from './pages/Login/Login.tsx'
import { Toaster } from 'sonner'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

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
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
        <Toaster richColors visibleToasts={1}/> {/*Mensajes de toster */}
          <RouterProvider router={router}/>
        </CartProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
