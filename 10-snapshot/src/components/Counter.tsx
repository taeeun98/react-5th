import { useCallback, useState } from "react";


function slow() {
  let sum = 0;
  for(let i = 0; i < 100000; i++){
    sum += i;
  }

  return sum;
}




function Counter() {

  // 연산이 오래 걸리는 작업의 경우에는 콜백으로 useState 사용
  // 콜백 함수의 작업을 한번만 수행 후에, state 업데이트 될때도 콜백함수를 수행하지 않음
  // const [number, setNumber] = useState(() => slow());
  const [number, setNumber] = useState(slow); // 이게 왜 콜백이랑 똑같지?

  // 함수를 여러번 만들지않게, 기억해주는 훅
    const handleClick =  useCallback(() => {
    setNumber(number + 1);
  }, [number])



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
