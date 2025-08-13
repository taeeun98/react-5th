import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router"




export async function clientLoader({params}:{params:{userId:string}}){
  
  return {
    user: fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then(r => r.json())
  }
  
}


function UserDetail() {

  const { user } = useLoaderData<{user: Promise<User>}>();

  return (
    <div>
      <h2>유저 프로필</h2>

      <Suspense fallback={<p>유저 정보 가져오는 중....</p>}>
        <Await resolve={user} errorElement={<div>Oops!!</div>}>
          {
            (user:User) => (
              <ul>
                <li>이름 : {user.name}</li>
                <li>이메일 : {user.email}</li>
                <li>전화번호 : {user.phone}</li>
              </ul>
            )
          }
        </Await>
      </Suspense>
      
    </div>
  )
}

export default UserDetail