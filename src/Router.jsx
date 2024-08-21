import { createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import ErrorPage from "./ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

export default router;