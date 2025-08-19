import { useCallback, useState } from "react";

// 커스텀훅은 use~ 로 시작한다
function useCounter({
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 10,

  //    = {} = 매개변수 전체에 대한 기본값
} = {}) {
  const [count, setCount] = useState(initialCount);

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  // useCallback = 함수 기억용도
  const reset = useCallback(() => setCount(initialCount), [initialCount]);

  // setCount 의 콜백을 이용해서 count(현재값)을 뽑아 step(몇씩증가할지)과 합침
  /*
    언제 useCallback 쓰나 ?
    메모된 자식(예: React.memo)에 콜백을 prop으로 넘길 때: 콜백 참조가 안 바뀌어야 자식이 불필요하게 리렌더링되지 않음. 
    의존성에 “안정적인 함수”가 필요한 훅에서: useEffect, useMemo, useImperativeHandle, 이벤트 리스너/구독 해제 등에 콜백 참조가 바뀌면 재구독이 일어남 → useCallback으로 고정. 
    콜백 ref를 안정적으로 쓰고 싶을 때: ref 콜백이 렌더마다 바뀌는 걸 막음. 
    콜백을 외부로 반환하는 커스텀 훅에서: 훅 소비자가 의존성에 넣어도 참조가 흔들리지 않게.
  */

  const increment = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c + step;
        if (nextCount >= max) nextCount = max;
        return nextCount;
      }),
    [max, step]
  );

   const decrement = useCallback(
    () => 
      setCount((c)=> {
        let nextCount = c - step;
        if(nextCount <= min) nextCount = min;
        return nextCount
      }),
      [min, step]
    );


  return {
    count, step, isMinDisabled, isMaxDisabled, increment, decrement, reset
  }
}

export default useCounter;
