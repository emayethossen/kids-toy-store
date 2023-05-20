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
import Error from "../components/Error/Error";
import UpdateToy from "../components/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import SingleToyDetails from "../components/SingleToyDetails/SingleToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/add-toys',
                element: <PrivateRoute><AddToys /></PrivateRoute>,
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
                element: <PrivateRoute><MyToys /></PrivateRoute>,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/single-toy/:id',
                element: <PrivateRoute><SingleToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://baby-toys-server-five.vercel.app/toys/${params.id}`)
            },
            {
                path: 'my-toys/update-toy/:id',
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`https://baby-toys-server-five.vercel.app/toys/${params.id}`)
            }
        ]
    },
]);

export default router;