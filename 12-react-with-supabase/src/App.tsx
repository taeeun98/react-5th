import { AuthProvider } from "./auth/AuthProvider";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { routes } from "./router/router";
import {RouterProvider} from "./router/RouterProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider navigation={<Header />} routes={routes} />
        <Footer />
      </AuthProvider>
    </div>
  );
}
export default App;
