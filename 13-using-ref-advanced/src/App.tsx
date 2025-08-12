import Header from "./components/Layout/Header"
import { routes } from "./router/router"
import {RouterProvider} from './router/RouterProvider/index'

function App() {
  return (
    <div style={{display:'flex'}}>
      <RouterProvider navigation={<Header />} routes={routes}/>
    </div>
  )
}
export default App