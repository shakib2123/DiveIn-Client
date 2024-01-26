import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import SignupForm from "../_forms/SignupForm";
import SigninForm from "../_forms/SigninForm";

const router = createBrowserRouter([
  // private routes
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // public routes
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    path: "/signin",
    element: <SigninForm />,
  },
]);

export default router;
