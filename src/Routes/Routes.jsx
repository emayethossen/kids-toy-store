import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import AddToys from "../components/AddToys/AddToys";
import AllToys from "../components/AllToys/AllToys";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import MyToys from "../components/MyToys/MyToys";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/add-toys',
                element: <AddToys />,
            },
            {
                path: '/all-toys',
                element: <AllToys />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/my-toys',
                element: <MyToys />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    },
]);

export default router;