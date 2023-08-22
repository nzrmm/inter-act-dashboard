import { RouterProvider } from "react-router-dom";
import routerComponents from "./router-components";

const App = () => {
  return <RouterProvider router={routerComponents} />;
};

export default App;
