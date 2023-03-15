import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import Headers from "./components/header/Headers";
import { Product } from "./pages/product/Product";
import { Categorie } from "./pages/categorie/Categorie";

const Layout = () => {
    return (
        <>
            <Headers />
            <div className="app">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/categorie/:name", element: <Categorie /> },
            { path: "/product", element: <Product /> },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
