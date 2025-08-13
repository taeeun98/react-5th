/* 

index : 해당 페이지에서 사용될 메인 페이지를 지정
route : 이동할 경로 / 렌더링될 컴포넌트 경로
layout : 하위 컴포넌트에서 동일하게 사용될 레이아웃 지정
prefix : 경로 앞에 공통적으로 사용될 루트 ex) auth/login

*/

import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

// :RouteConfig

export default [
  index("./pages/Home/index.tsx"),
  route("about", "./pages/About/index.tsx"),
  layout("./pages/Auth/AuthLayout.tsx", [
    ...prefix("auth", [
      route("login", "./pages/auth/Login.tsx"),
      route("register", "./pages/auth/Register.tsx"),
    ]),
  ]),

  /* concerts */
  //   ...prefix('concerts',[
  route("concerts", "./pages/Concerts/ConcertsLayout.tsx", [
    index("./pages/Concerts/ConcertsHome.tsx"),
    route(":city", "./pages/Concerts/City.tsx"),
    route("trending", "./pages/Concerts/Trending.tsx"),
  ]),

  /* users */
  ...prefix("users", [
    route(":userId", "./pages/User/UserDetail.tsx"),
    route("new", "./pages/User/NewUser.tsx"),
  ]),
] satisfies RouteConfig;

/* 

기본 내보내기 값이 RouteConfig 타입(규격)을 충족하는지 컴파일 타임에서 체크

*/
