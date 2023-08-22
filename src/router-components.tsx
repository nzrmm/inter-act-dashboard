import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layouts";
import { Home } from "./routes";

const routerComponents = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routerComponents;
