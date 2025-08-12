import { RouterProvider } from "react-router"
import { routes } from "./router/routes"

function App() {
  return (
    <div style={{display:'flex'}}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
export default App