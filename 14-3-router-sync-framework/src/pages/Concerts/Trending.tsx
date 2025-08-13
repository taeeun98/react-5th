import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useFetcher, useLoaderData, type LoaderFunctionArgs } from "react-router"





// loader SSR 전용

// SPA(CSR) clientLoader
export async function clientLoader(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok) throw new Response('유저 데이터 로딩 실패',{status:500})
  return res.json();
}


function Component({loaderData}:{loaderData:User[]}) {

  // const users = useLoaderData() as User[];
  const users = loaderData;
  const fetcher = useFetcher();

// loader 재사용 
  const handleClick = (userId:number) => {
    fetcher.load(`/users/${userId}`)
  }

  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
      {
        users.map((user)=>(
          <li key={user.id}>
            <button type="button" onClick={()=> handleClick(user.id)}>{user.name}</button>
          </li>
        ))
      }
      <hr />
      {
        fetcher.data?.user && (
          <Suspense fallback={<p>로딩 중...</p>}>
            <Await resolve={fetcher.data.user}>
              {(user: User) => (
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
              )}
            </Await>
          </Suspense>
        )
      }
    </div>
  )
}
export default Component