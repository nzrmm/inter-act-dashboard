import { createBrowserRouter } from "react-router-dom";

import { Root } from "@/layouts";
import { Error } from "@/components/layouts";
import { Home } from "@/routes";

const routerComponents = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routerComponents;
