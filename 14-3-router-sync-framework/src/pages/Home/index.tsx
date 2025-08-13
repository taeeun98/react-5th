// @ts-ignore
import type { Route } from './+types/Home'
import cssURL from '@/styles/main.css?url'

// 페이지에 필요한 메타태그 (사이트 타이틀 바꾸는거) 설정하기
// 내보내는 이름 meta, links 등 고정되어 있음. 바꿀 수 없음 => 프레임워크라고 하는 이유
export const meta: Route.MetaFunction = () => [
  { title: "Main | CRA" },
  { name: "description", content: "CRA를 다루는 메인 페이지입니다." },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Framework" },
  // og=Open Graph  웹 페이지 메타데이터 표준 규격 (미리보기 정보)
];



// 페이지에 필요한 link 태그 설정
export const links = () => ([
  { rel: 'stylesheet', href: cssURL},
  { rel : 'preload', as:'image', href:'/vite.svg'}

  // 지금 안 쓰고 다음 화면에서 쓸 확률이 있다면
  // { rel: 'prefetch', as:'image', href:'/vite.svg'}
])



function Home() {
  return (
  <>
    <h1>Main Page</h1>
    <div>
      <img src="/vite.svg" alt="vite logo" />
    </div>
  </>
);
}
export default Home;
