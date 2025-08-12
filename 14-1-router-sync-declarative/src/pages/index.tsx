import GlobalNav from "@/components/GlobalNav"
import { Outlet } from "react-router"

function Root() {
  return (
    <div>
        <header>
            <h1>Single Page Application</h1>
            <GlobalNav />
        </header>

        <main>
            <Outlet></Outlet>
        </main>

        <footer>
            <small> &copy; 2025 CTA </small>
        </footer>
    </div>
  )
}
export default Root