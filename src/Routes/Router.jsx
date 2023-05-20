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
                loader: () => fetch('http://localhost:5000/sportstoys')
            },
            {
                path: '/alltoys/:id',
                element: <ToysDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/sportstoys/${params.id}`)
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><Addtoy /></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <MyToys />,
                loader: () => fetch('http://localhost:5000/posts')
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router