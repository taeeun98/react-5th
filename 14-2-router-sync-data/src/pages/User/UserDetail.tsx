import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";

function UserDeatail() {
  // const user = useLoaderData() as User;

  // 라우터에서 로더에 객체를 만들어서 여기서 프로미스가 떨어지는것.
  // 원래는 useLoaderData 가 프로미스 알아서 풀어주는데
  const { user } = useLoaderData<{ user: Promise<User> }>();

  // return (
  //   <div>
  //     <div>유저 프로필</div>
  //     <ul>
  //       <li>이름 : {user.name}</li>
  //       <li>이메일 : {user.email}</li>
  //       <li>전화번호 : {user.phone}</li>
  //     </ul>
  //   </div>
  // );

  console.log(user);
  
  return (
    <div>
      <div>유저 프로필</div>

      {/* Suspense = 자식 요소의 로딩이 완료될때까지 Suspense를 보여줄수있음 */}
      <Suspense fallback={<p>유저 정보를 가져오는 중 ...</p>}>
      {/* useLoaderData 에 프로미스 객체가 떨어졌으니까
      Await를 사용해 프로미스 객체를 resolve 해준다. */}
        <Await resolve={user} errorElement={<p>유저 정보가 없습니다</p>}>
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
  );
}

export default UserDeatail;
