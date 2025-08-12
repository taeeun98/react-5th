import type { User } from "@/@types/global";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

function Trending() {
  const users = useLoaderData() as User[];

  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
        </li>
      ))}
    </div>
  );
}
export default Trending;

// 이렇게 안에서 로더 쓸 수 도 있는데, args 는 LoaderFunctionArgs로 지정해야 함
export async function loader (args:LoaderFunctionArgs) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
