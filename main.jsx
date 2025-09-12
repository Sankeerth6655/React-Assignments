import { StrictMode } from 'react'
import Cart from './Cart.jsx';
import Todolist from './Todolist.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/cart',
        element:<Cart></Cart>
    },
    {
        path:'/Todolist',
        element: <Todolist></Todolist>
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
);
