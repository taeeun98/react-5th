import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";
import ConcertsHome from "./pages/Concerts/ConcertsHome";
import Trending from "./pages/Concerts/Trending";
import AuthLayout from "./pages/Auth/AuthLayout";
import Root from "./pages";
import City from "./pages/Concerts/City";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <Routes>
          {/* Route 에 path 경로랑 element 내용 쓰기 */}

          <Route path="/" element={<Root />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>

            {/* auth 를 통해서만 접근하고 싶은 페이지 = ...prefix('auth') */}
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Route>

            <Route path="concerts">
              <Route index element={<ConcertsHome />}></Route>
              {/* 동적 라우팅. concerts/aaa 하면 aaa 이 무엇이든 다 넘어감 */}
              <Route path=":city" element={<City />}></Route>
              <Route path="trending" element={<Trending />}></Route>
            </Route>
          </Route>

          {/* 정의된 Route와 매칭되지 않는 나머지 모든 경로 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
