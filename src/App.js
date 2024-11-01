import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import AboutPage from "./pages/aboutPage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import TestPage from "./pages/testPage";
import NotFoundPage from "./pages/notfoundPage";

import "./style/main.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/products" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ),
  {
    basename: "/shopping-website",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
