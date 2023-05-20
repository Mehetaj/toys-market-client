import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Login from "../Pages/Home/Home/Login/Login"
import Signup from "../Pages/Home/Home/Login/Signup"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"
import AllToys from "../Pages/Home/Alltoy/AllToys"
import ToysDetails from "../Pages/Home/Alltoy/ToysDetails"
import Addtoy from "../Pages/Home/Addtoy/Addtoy"
import PrivateRoute from "./PrivateRoute"
import MyToys from "../Pages/Home/MyToys/MyToys"
import UpdateToy from "../Pages/Home/UpdateToy/UpdateToy"
import Blog from "../Pages/Blog/Blog"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/alltoys',
                element: <AllToys />,
                loader: () => fetch('https://toys-server-eight.vercel.app/sportstoys')
            },
            {
                path: '/alltoys/:id',
                element: <ToysDetails />,
                loader: ({ params }) => fetch(`https://toys-server-eight.vercel.app/sportstoys/${params.id}`)
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><Addtoy /></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys /></PrivateRoute>,
                loader: () => fetch('https://toys-server-eight.vercel.app/posts')
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdateToy /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-server-eight.vercel.app/posts/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router