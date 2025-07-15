import { useState, useEffect } from "react";

/*
[1] 렌더링 시작
[2] DOM 생성 및 그리기 (commit 단계)
[3] useEffect 실행
[4] 사용자 인터랙션 -> 상태 변경 -> 다시 렌더링
[5] 기존 useEffect 의 cleanup 실행 -> 새로운 useEffect 실행
*/

function Effect() {
    // User 는 global.d.ts 에 있으니까 전역에서 사용할 수 있어서
    // 따로 import 없이 사용 가능
    // 이때 global.d.ts 에는 export 없어야함
  const [users, setUsers] = useState<User[]|null>(null);
  const [loading, setLoading] = useState(true);

    //fetch 같은 경우는 사이드이펙트기 때문에 useEffect 안에서 사용해야
  //   useEffect(() => {
  // const url = "https://jsonplaceholder.typicode.com/users";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data);
  //         setLoading(false)
  //       })
  //       .catch((err) => {
  //         console.error("데이터 가져오기 실패", err);
  //         setLoading(false)
  //       });
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      if (response.ok) {
        setUsers(data);
        setLoading(false);
      } else {
        console.error("error!!");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading) return <p>loading....</p>

  return (
    <ul>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
    </ul>
  );
}

export default Effect;
