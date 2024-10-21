import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import NotFoundPage from "./pages/notfoundPage";

import "./style/main.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/shop" element={<ShopPage />} />
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
