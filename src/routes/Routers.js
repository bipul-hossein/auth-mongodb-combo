import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>

            }

        ]
    },
    {
        path:'*',
        element:<p>we could not find this pages</p>
    }

])

export default router;