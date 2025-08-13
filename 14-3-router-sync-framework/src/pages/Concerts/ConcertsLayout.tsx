import { Outlet, redirect } from "react-router"

export async function clientLoader() {
    // 조건이 부합하면 아래 component 렌더링해서 outlet 에 나머지 페이지 뿌리고
    // 조건 안맞으면 로그인으로 
    if(!localStorage.getItem('token')){
        throw redirect('/auth/login');
    }

    return null; 
}


clientLoader.hydrate = true; //하이드레이션 중에 실행


function component() {
  return (
    <><Outlet></Outlet></>
  )
}
export default component