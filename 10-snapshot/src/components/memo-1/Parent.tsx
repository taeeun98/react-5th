import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked!");
  }, []);


  // 배열이 바뀐적없음에도, 자식으로 전달하는 과정에서, 부모가 리렌더링 일어나면서
  // fruits 을 새로 그리기 때문에 리액트는 배열이 바뀌었다고 인식 -> 다시 그림
  // 이때 사용하는게 useMemo()
  const fruits = useMemo(()=> ["사과", "배", "바나나", "딸기"], []);

  return (
    <div>
      <h1>Parent Count : {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        {" "}
        +1{" "}
      </button>
      <Child label="나는 자식이다!" items={fruits} onClick={handleClick} />
    </div>
  );
}

export default Parent;
