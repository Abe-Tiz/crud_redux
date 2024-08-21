import { createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import ErrorPage from "./ErrorPage";
import Edit from "./Edit";


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
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

export default router;