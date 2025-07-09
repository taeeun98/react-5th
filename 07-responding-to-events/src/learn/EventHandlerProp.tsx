interface Props {
  onClick: () => void;
  onUpdateMessage: (add:string) => void;
}

function EventHandlerProp({ onClick, onUpdateMessage }: Props) {

  const onMouseEnter = () => {
    onUpdateMessage('onMouseEnter')
  };
  const onMouseLeave = () => {
    onUpdateMessage('onMouseLeave')
  };


  // 컴포넌트 내에서 이벤트 핸들러를 정의해도 도ㅣ지만,
  // onClick 부모에게서 props 으로 핸들러를 받아오는 이유
  // 1. 자식이 이벤트를 발생시켰을때 부모의 요소를 바꾸고자 할떄
  // 2. 똑같은 이벤트를 가진 자식이 많을때

  return (
    <details>
      <summary
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <b>이벤트 핸들러 추가하기</b>
      </summary>
      <p>
        이벤트 핸들러 추가를 위해서는 먼저 함수를 정의하고
        <br />
        이를 적절한 JSX 요소에 prop으로 전달해야 합니다.
      </p>
    </details>
  );
}

export default EventHandlerProp;
