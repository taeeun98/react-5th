import { RouterProvider } from "react-router";
import router from "./router/router";
import { HelmetProvider } from "@dr.pogodin/react-helmet";

// react-router - Data mode
function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  );
}
export default App;
