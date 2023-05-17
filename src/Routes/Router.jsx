import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Login from "../Pages/Home/Home/Login/Login"
import Signup from "../Pages/Home/Home/Login/Signup"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])

export default router