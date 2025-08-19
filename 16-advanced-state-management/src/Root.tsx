import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GlobalNav from "./components/GlobalNav"

function Root() {
  return (
    <div className="h-screen bg-indigo-50/30 flex flex-col">
      
      <Header />
      <GlobalNav />
      
      <main className="flex-1 m-4">
        <Outlet></Outlet>
      </main>

      <Footer />

    </div>
  )
}
export default Root