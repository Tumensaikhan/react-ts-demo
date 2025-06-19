import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout/layout";
import { Cats } from "../pages/cats/cats";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Form } from "../pages/form/form";
import { Login } from "../pages/login/login";
import { Products } from "../pages/products/products";

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
        index: true,
        element: <Dashboard />
    }, {
        path: 'products',
        element: <Products />,
    }, {
        path: 'cats',
        element: <Cats />
    }, {
        path: 'form',
        element: <Form />
    }]
}, {
    path: '/login',
    element: <Login />
}])

// React router mode: Data
// loader
// code splitting (lazy loading)       eager, lazy (async => component)
// suspense, errorBoundary

{/* <ErrorBoundry>
    <Suspense fallback={<Loading />}>
        <LazyLoadedComponent />
    </Suspense>
<ErrorBoundry> */}
