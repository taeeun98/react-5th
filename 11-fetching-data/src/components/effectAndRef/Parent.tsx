import { useEffect, useLayoutEffect } from "react";


/*
[1] 렌더링 시작
[2] DOM 업데이트
[3] useLayoutEffect 실행 (동기)
[4] 화면 그리기 (commit)
[5] useEffect 실행 (비동기)

주의점 : useLayoutEffect는 동기적으로 실행되기 때문에
렌더링이 끝나기 전까지 브라우저를 일시정지 함.
그래서 이 안에는 복잡한 로직이나 api 요청을 넣으면 렌더링 지연이 발생됨
이름과 같이,
레이아웃 수치 측정 / 수정 코드만 (useEffect 만 써도 되는데 화면이 끊긴다거나, 깜빡거린다면 사용)
*/

function Parent() {

    useLayoutEffect(()=>{
        console.log('aa');
        
        // 당연히 얘도 cleanup 하는 return 구문 존재
        // return () => {} 
    })

    useEffect(()=>{
        console.log('bb');
        
    })

    console.log();
    

  return (
    <div>

    </div>
  )
}
export default Parent;
