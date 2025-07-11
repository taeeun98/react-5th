import { useState } from "react";

function Counter() {

  const [number, setNumber] = useState(0);

  const handleClick = () => {
    // 콜백함수로 넣으면, 이전에 콜백 된 값이 다음 setNumber에 갱신됨.
    setNumber((n)=>n + 1)
    setNumber((n)=>n + 1)
    setNumber((n)=>n + 1)
  };

  return (
    <>
      <h1> {number} </h1>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </>
  );
}

export default Counter;
