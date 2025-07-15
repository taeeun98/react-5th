import { useRef } from "react";
import Child from "./Child";

/*
1. 전역 탐색은 React의 구조(체계)를 무시하는 방식
   querySelector는 브라우저 전체의 DOM 트리를 뒤진다.
   React의 가상 DOM 흐름을 무시한다. 외부에서 DOM을 추적하는 방식 => 안정성과 성능 저하 될 수 있다.

2. useRef는 컴포넌트당 직접 연결됨. (안정)
   정확한 DOM 선택이 가능함.
   컴포넌트가 언마운트되면 자동으로 null 처리가 됨 > React의 생명주기 안에서 돌아간다.

3. 동일한 트리 안에서만 접근된다는 보장 (안정)
   querySelector는 예상하지 못한 외부 요소까지 다 탐색
   useRef는 해당 요소 1:1 직접 연결 → 예측 가능한 결과

4. 성능상 이점
   querySelector는 문서 전체를 탐색
   ref는 이미 컴포넌트 안에서 ‘직접적인 참조’가 되어있음. => 탐색 x
*/




function Parent() {

  // input 찾아서 focus 하기
  // useRef = dom 요소를 잡을 때 사용.
  const inputRef = useRef<HTMLInputElement>(null);


  const handleFocus = () => {
    // 명령형 프로그래밍
    // const input = document.querySelector("input") as HTMLInputElement;
    // input.focus();

    console.log(inputRef.current);
    
    // 선언형 프로그래밍
    inputRef.current?.focus();
  };


  return (
    <>
      {/* <input type="text" ref={inputRef} /> */}
      <Child ref={inputRef} placeholder={"아이디를 입력하세요"} />
      <button onClick={handleFocus} type="button">
        인풋에 포커스
      </button>
    </>
  );
}

export default Parent;
