import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import GlobalNav from "./components/GlobalNav";


// 루트에서 하이드레이션 설정하면, 여기 하나만 쓸 수 있음. 자식들은 서스펜스로 처리해야함
export function HydrateFallback() {
  return <div style={{padding:16}}>앱 로딩 중 ....</div>
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Dark.svg"
          type="image/x-icon"
        />


        {/* 기본 메타 타이틀 설정. 따로 설정 안한 페이지에서 보여짐 */}
        <title>Router-framework</title>

        {/* 내보낸 meata 데이터랑 links (css)데이터 렌더링 */}
        <Meta />
        <Links />



      </head>
      <body>
        {children}
        {/* 뒤로가기 했을떄 스크롤 위치 기억하기
          다른페이지 갔다오는건 새로운 history.state 가 생기는거라 안됨
        */}
        <ScrollRestoration />
        <Scripts></Scripts>
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <h1>Single Page Application</h1>
      <GlobalNav></GlobalNav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
