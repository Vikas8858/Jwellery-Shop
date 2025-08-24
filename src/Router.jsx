import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductPage from "./Page/ProductPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/products/:id",
    
        element: <ProductPage />
    }
])
export default Router;