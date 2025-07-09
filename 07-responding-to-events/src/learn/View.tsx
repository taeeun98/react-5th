import { useState } from "react";
import EventHandlerProp from "./EventHandlerProp";
import EventPropagation from "./EventPropagation";
import EventWithSideEffects from "./EventWithSideEffects";

// 생성자 함수
function View() {
  return <div></div>;
}

export default View;

function RespondingToEvents() {

    // useState 사용법. 초기 설정을 '' 빈 문자열로, 
    //  setText 는 렌더 트리거.
    // 렌더트리거도 사방팔방 유발되면 성능저하. 나중엔 이것도 남발되지 않도록 해야함
    const [text, setText] = useState(''); //  React Hook

    const style = {
    marginRight: "10px",
  };

  const handler = () => {
    console.log('hi');
    
  }

  let message = '';
  const updateMessage = (add:string):void => {
    message += add;
    console.log(message);
    
  }



  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />
      <form
        action="/?submitted"
        onSubmit={(e: React.MouseEvent<HTMLFormElement>) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const input = target.children[0] as HTMLInputElement;
          setText(input.value);
        }}
      >
        <input
          name="사용자이름"
          type="text"
          aria-label="사용자 이름"
          placeholder="심선범"
          style={style}
        />
        <button type="submit">보내기</button>
      </form>
      <div>
        <output>{text}</output>
      </div>

      
      <EventHandlerProp onClick={handler} onUpdateMessage={updateMessage}/>
      <EventPropagation />
      <EventWithSideEffects />
    </div>
  );
}

//생성자 RespondingToEvents 함수를 실행하지 않고,
// js 는 일급객체이기 때문에 함수값 자체를 전달한다
// 이걸 컴파운드 컴포넌트 라고 부름
View.RespondingToEvents = RespondingToEvents;
