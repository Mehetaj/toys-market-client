import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Login from "../Pages/Home/Home/Login/Login"
import Signup from "../Pages/Home/Home/Login/Signup"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"

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
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router