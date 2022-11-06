import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Update from "../Share/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch(`http://localhost:5000/users`)
                }

            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)

            }

        ]
    },
    {
        path: '*',
        element: <><p>we could not find this pages</p><Link to="/">Go to Home</Link></>
    }

])

export default router;