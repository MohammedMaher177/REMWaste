import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/not-found";
import SkipSelectionGradiant from "../pages/SkipSelectionGradiant";
import SkipSelectionSimpleDesing from "../pages/SkipSelectionSimple";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <SkipSelectionGradiant /> },
      { path: "gradiant", element: <SkipSelectionGradiant /> },
      { path: "simple", element: <SkipSelectionSimpleDesing /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
