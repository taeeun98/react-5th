/*

element : JSX 엘리먼트를 직접 전달하는 방식 v6+
이미 렌더링된 React Element를 라우터에 전달하는 방식
미 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅(lazy 로딩) 매우 불편함
const a = <Root />

Component : 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
미 렌더링 상태로 컴포넌트를 생성하므로, lazy (지연된 = 성능을 끌어올리는)로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
const b = Root

*/

// import Root from "@/pages";
// import About from "@/pages/About";
// import AuthLayout from "@/pages/Auth/AuthLayout";
// import Login from "@/pages/Auth/Login";
// import Register from "@/pages/Auth/Register";
// import City from "@/pages/Concerts/City";
// import ConcertsHome from "@/pages/Concerts/ConcertsHome";
// import Trending from "@/pages/Concerts/Trending";
// import Home from "@/pages/Home";
// import NotFound from "@/pages/NotFound";
import { loader as trendingLoader } from "@/pages/Concerts/Trending";
import { lazy } from "react";
import { createBrowserRouter, Outlet, redirect } from "react-router";

// 코드 스플릿팅 (해당 페이지에 들어갔을때만 렌더링 되도록)
//React의 코드 스플리팅(Code Splitting) + 동적 임포트(Dynamic Import)
const Root = lazy(() => import("@/pages"));
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));

const AuthLayout = lazy(() => import("@/pages/Auth/AuthLayout"));
const Login = lazy(() => import("@/pages/Auth/Login"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const RequireAuth = lazy(() => import("@/pages/Auth/RequireAuth"));

const ConcertsHome = lazy(() => import("@/pages/Concerts/ConcertsHome"));
const Trending = lazy(() => import("@/pages/Concerts/Trending"));
const City = lazy(() => import("@/pages/Concerts/City"));
const UserDetail = lazy(() => import("@/pages/User/UserDetail"));

const NotFound = lazy(() => import("@/pages/NotFound"));
const NewUser = lazy(() => import("@/pages/User/NewUser"));

// createBrowserRouter에 붙는 애들이 RouteObject 라고 부름
export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        handle: { label: "Home", showInNav: true },
      },
      {
        path: "about",
        Component: About,
        handle: { label: "About", showInNav: true },
      },

      /* auth routes */
      {
        path: "auth",
        // 원래는 element 였으나, 최신버전에서 Component로 바뀜.
        // 둘다 사용은 가능하지만 Component 가 더 좋음
        Component: AuthLayout,
        // Outlet에 children 이 렌더링됨
        children: [
          {
            path: "login",
            Component: Login,
            handle: { label: "Login", showInNav: true },
          },
          {
            path: "register",
            Component: Register,
            handle: { label: "Register", showInNav: true },
          },
        ],
      },

      /* concerts routes */
      {
        path: "concerts",
        Component: () => (
          <RequireAuth>
            {/* 밑의 children 이 여기 Outlet 에 렌더링 */}
            <Outlet></Outlet>
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            Component: ConcertsHome,
            handle: { label: "Concerts", showInNav: true },
          },
          { path: ":city", Component: City },
          {
            path: "trending",
            Component: Trending,
            handle: { label: "Trending", showInNav: true },
            HydrateFallback: () => <div>데이터 로딩 중 ... </div>,
            loader: trendingLoader,
            // 이런식으로 쓸수도 있음 근데 로더를 더 많이 씀
            // lazy: async () => {
            //   const mod = await import("@/pages/Concerts/Trending");

            //   return {
            //     Component: mod.default, //export default 된 Component
            //     loader: mod.loader, // named export loader
            //   };
            // },
          },
        ],
      },

      /* users routes */
      {
        // path: "users",
        // Component: () => (
        //   <RequireAuth>
        //     <Outlet></Outlet>
        //   </RequireAuth>
        // ),
        // children: [
        //   { path: ":id", Component: UserDeatail, loader: userLoader },
        // ],
        path: "users/:userId",
        handle: { label: "users", showInNav: false },
        Component: UserDetail,

        // loader는 리액트 라우터가 알아서 실행하는데,
        // 해당 컴포넌트 페이지에 들어가기 전! 에 실행함
        // 데이터 패치 전에 미리 로더로 스켈레톤 보여주기 (객체로 만들기)
        loader: async ({ params }) => {
          // 패치 될때까지 기다리기
          //   const res = await fetch(
          //     `https://jsonplaceholder.typicode.com/users/${params.userId}`
          //   );
          //   return res.json();

          // 패치 되기 전에 UI 먼저 그리기
          return {
            user: fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            ).then((res) => {
              if (!res.ok) throw new Error("유저 어딨습니까?");
              return res.json();
            }),
          };
        },
      },

      {
        path: "user/new",
        Component: NewUser,
        // NewUser 안의 submit 실행될떄 action 이 실행된다
        action: async ({ request }) => {
          // request 를 파싱해서 formData 객체로 만든다
          // Fetch API의 Request 객체
          // → request.formData()는 body를 한 번 읽어서 FormData로 변환해줌.
          // Promise<FormData> 를 반환하기 떄문에 await 사용
          const formData = await request.formData();
          // input 태그의 name 속성을 읽어오는 것
          const name = formData.get("name") as string;
          const email = formData.get("email") as string;

          console.log("request", request);
          console.log(name, email);

          // const {data, error} = await supabase.from('user').insert([{name, email}])
          // if(error) {
          //   throw new Error('...')
          // }

          return redirect("/users");
        },
      },
    ],
  },
  { path: "*", Component: NotFound },
]);
