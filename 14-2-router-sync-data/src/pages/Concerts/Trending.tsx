import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useFetcher, useLoaderData, type LoaderFunctionArgs } from "react-router";

function Trending() {
  // 로더에 프로미스 객체가 떨어지지만 useLoaderData 가 알아서 전개해서 받아줌
  const users = useLoaderData() as User[];

  // 로더 재사용할수도 있음!
  // 여긴 트렌딩이지만 userDetail 에 사용된 로더 가능

  const fetcher = useFetcher();
  const handleClick = (userId:number) => {
    console.log(fetcher);
    // 뒤의 주소에 있는 로더를 가져온다
    fetcher.load(`/users/${userId}`);
    // 가져온 데이터는 여기에 프로미스로 떨어진다
    console.log(fetcher.data);
  }


  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={()=>handleClick(user.id)}>{user.name}</button>
        </li>
      ))}

      <br />

      {
        //밸리데이션
        fetcher.data?.user && (
          // 서스펜스로 감싸주고 (꼭 같은 컴포넌트는 아니더라도 상위 계층에서 감싸야함)
          <Suspense fallback={<p>로딩중 ....</p>}>
            {/* 리솔브로 프로미스 풀어주기 */}
            <Await resolve={fetcher.data.user}>
              {
                (user:User) => (
                  <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                  </ul>
                )
              }
            </Await>
          </Suspense>
        )

      }

    </div>
  );
}
export default Trending;

// 이렇게 안에서 로더 쓸 수 도 있는데, args 는 LoaderFunctionArgs로 지정해야 함
export async function loader(args: LoaderFunctionArgs) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
