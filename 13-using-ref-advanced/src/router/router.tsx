import AccessDom from "@/pages/AccessDom";
import Home from "@/pages/Home/Home";
import ImperativeHandle from "@/pages/ImperativeHandle";
import MotionAnimation from "@/pages/MotionAnimation";
import Remember from "@/pages/Remember";





export const routes = [
  {
    title:'리액트 애니메이션',
    path:'/',
    element: <Home />
  },
  {
    title:'리-렌더 없이 기억하기',
    path:'/re-render',
    element: <Remember />
  },
  {
    title:'DOM 노드 접근 / 조작',
    path:'/access-dom',
    element: <AccessDom />
  },
  {
    title:'명령형 핸들 노출',
    path:'/imperativeHandle',
    element: <ImperativeHandle />
  },
  {
    title:'모션 애니메이션',
    path:'/motion-animation',
    element: <MotionAnimation />
  },

]