function EventWithSideEffects() {
  /*
- 카운트 다운 버튼을 클릭시 숫자가 100 -> 0 으로 0.1초씩 감소하여 0이 되었을 때 카운트 종료

1. count element를 선택한다.
2. setInterval API를 호출한다.
3. 현재의 카운트 값을 가져온다.
4. 갱신된 카운트 변수를 저장한다. (-1)
5. 현재의 카운트에 갱신된 카운트 변수를 넣는다.
6. 갱신된 카운트 값이 0이 되었을 때 Interval을 종료한다.

이 모든건 side Effect이기 때문에 핸들러에서 관리한다.
*/

  const handleCountDown = () => {
    //document.getElementsByClassName()의 **리턴 타입은 HTMLCollectionOf<Element>**입니다.
    //즉, 배열처럼 생긴 유사 배열 컬렉션이라서, 바로 단일 요소처럼 사용할 수 없어요.
    // const el = document.getElementsByClassName('count') as HTMLOutputElement;
    const el = document.querySelector("count") as HTMLOutputElement; //querySelector는 첫 번째 매칭 요소를 반환

    const timeout = setInterval(() => {
      const current = +el.value;
      const next = current - 1;

      el.value = String(next);

      if (next <= 0) {
        clearInterval(timeout);
      }
    }, 100);
  };

  return (
    <details open>
      <summary>
        <b>이벤트 핸들러와 사이드 이펙트</b>
      </summary>
      <p>이벤트 핸들러는 사이드 이펙트를 위한 최고의 포지션입니다.</p>
      <p>
        함수를 렌더링하는 것과 다르게 이벤트 핸들러는 순수할 필요가 없기에
        <br />
        무언가를 변경하는데 최적의 위치입니다.
      </p>
      <div className="countDown">
        <button type="button" onClick={handleCountDown}>
          카운트 다운
        </button>
        <output className="count">100</output>
      </div>
    </details>
  );
}
export default EventWithSideEffects;
