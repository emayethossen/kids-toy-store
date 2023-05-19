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
            },
            {
                path: 'my-toys/update-toy/:id',
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    },
]);

export default router;