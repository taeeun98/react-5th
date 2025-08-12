import { useRef, useState } from 'react';
import S from './style.module.css'
import ChatBox, { type ChatBoxHandle } from './components/ChatBox';



const INITIAL_CHAT_MESSAGE = [
  {id:'chat-1', message:'오늘 저녁에 뭐 먹을까?', isMe:false},
  {id:'chat-2', message:'오늘? 저녁에 뭐 먹지?', isMe:true},
  {id:'chat-3', message:'치킨 먹을까? ', isMe:false},
  {id:'chat-4', message:'치킨...난 별로..', isMe:true},
  {id:'chat-5', message:'나는 오늘 맛있는 회가 먹고 싶어! 숙성회 어때?', isMe:false},
  {id:'chat-6', message:'너무 좋은 생각이다~~ 알았어~~', isMe:true},
  {id:'chat-7', message:'좋아 좀 있다 별내역 2번 출구에서 만나자!', isMe:false},
]


export type Chat = typeof INITIAL_CHAT_MESSAGE;




function ImperativeHandle() {

  const [chatMessage, setChatMessage] = useState<Chat>(INITIAL_CHAT_MESSAGE);

  // 하위 컴포넌트의 명령형 핸들에 접근 가능한 객체를 참조
  const imperativeHandleRef = useRef<ChatBoxHandle>(null);

  // [상태 업데이트] 채팅 메시지 목록에 새 메시지 추가 기능
  const handleAddMessage = (message:string) => {
    
    const nextChatIndex = chatMessage.length + 1;
    
    const newMessage = {
      id: `chat-${nextChatIndex}`,
      isMe:true,
      message
    }

    setChatMessage((message)=> [...message, newMessage])
  }

  const mountedMainElement = () => {
    const imperativeHandles = imperativeHandleRef.current;
    if(!imperativeHandles) return;
    imperativeHandles.scrollDownList();
  }

  
  return (
    <main className={S.container} ref={mountedMainElement}>
      <h1>상위 컴포넌트에 명령형 핸들 노출하기</h1>
      <div className={S.description}>
        <p>
          <a 
            href="https://ko.react.dev/reference/react/forwardRef"
            rel="noreferrer noopener"
            target="_blank"
          >
            React.forwardRef() / ref Props
          </a>
           를 사용해 상위 컴포넌트에 하위 컴포넌트의 DOM 요소 노드를 노출하는 방법을 학습했습니다.
        </p>
        <p>
          때때로 DOM 요소 노드에 대한 접근을 허용하지 않고, 명령형 핸들(함수)를 노출하는 방법에 대해 학습해봅니다.
        </p>
        <p>
          이런 경우 
          <a 
            href="https://ko.react.dev/reference/react/useImperativeHandle"
            rel="noreferrer noopener"
            target="_blank"
          >
            React.useImperativeHandle()
          </a>
           훅을 사용할 수 있습니다.
        </p>
      </div>
      <ChatBox
        ref={imperativeHandleRef}
        message={chatMessage}
        onAddMessage={handleAddMessage}
      />
    </main>
  )
}
export default ImperativeHandle