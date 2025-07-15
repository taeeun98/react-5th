import { useState, useEffect } from "react";


/*
[1] 렌더링 시작
[2] DOM 생성 및 그리기 (commit 단계)
[3] useEffect 실행
[4] 사용자 인터랙션 -> 상태 변경 -> 다시 렌더링
[5] 기존 useEffect 의 cleanup 실행 -> 새로운 useEffect 실행
*/


function Effect() {
  const [count, setCount] = useState(0);

  // useEffect(callback 함수, 의존성배열(옵션))
  useEffect(() => {
    // useEffect 는 데이터를 가져오는데 적합한 공간.
    // 의존성 배열을 [] 로 추가하면 데이터를 처음 단 한번만 가져옴
    // [count] 로 추가하면 count 값 바뀔때는 useEffect를 실행함
    console.log("useEffect 실행");

    return ()=>{
        // 클린업함수는 콜백함수의 retrun 구문에.
        // 다시 useEffect 를 리렌더링 할 때에는 클린업함수가 먼저 실행 된후
        // 다시 데이터를 가져옴
        console.log('useEffect 클린업');
    }

  });

  console.log("렌더링됨");

  return (
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        {" "}
        + 1{" "}
      </button>
    </div>
  );
}

export default Effect;
