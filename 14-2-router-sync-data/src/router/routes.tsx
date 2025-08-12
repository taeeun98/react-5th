/*

element : JSX 엘리먼트를 직접 전달하는 방식 v6+
이미 렌더링된 React Element를 라우터에 전달하는 방식
미 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅(lazy 로딩) 매우 불편함
const a = <Root />

Component : 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
미 렌더링 상태로 컴포넌트를 생성하므로, lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
const b = Root

*/



import Root from "@/pages";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path:'/',
        // 원래는 element 였으나, 최신버전에서 Component로 바뀜.
        // 둘다 사용은 가능하지만 Component 가 더 좋음
        Component: <Root />,
        // Outlet에 children 이 렌더링됨
        children: [
            {index:true, Component: <Home />},
            {path:'about', Component: <About />},
        ]
    },
    {
        path:'*',
        Component: <NotFound />
    }
])