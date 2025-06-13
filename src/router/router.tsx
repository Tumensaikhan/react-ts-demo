import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout/layout";
import { Cats } from "../pages/cats/cats";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { Products } from "../pages/products/products";

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
        index: true,
        element: <Dashboard />
    }, {
        path: '/products',
        element: <Products />,
    }, {
        path: '/cats',
        element: <Cats />
    }]
}, {
    path: '/login',
    element: <Login />
}])  
