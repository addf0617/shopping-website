import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/layout";
import Homepage from "./pages/homepage";

/* import "./style/main.css"; */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
