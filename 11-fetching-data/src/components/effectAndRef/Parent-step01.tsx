import { useEffect, useRef, useState } from "react";
import Child from "./Child";

function Parent() {
  const [ message, setMessage ] = useState<string[]>([
    "안녕하세요",
    "오늘 날씨 어때요?",
    "비가 추적추적 내리네요...",
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null)

  const addMessage = () => {
    setMessage((prev) => [...prev, `새 메시지 ${prev.length + 1}`]);
  };

  // 메세지가 바뀔때마다 맨 아래로 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  

  return (
    <div>
      <h2>채팅방</h2>
      <div
        style={{
          height: "200px",
          overflow: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {message.map((msg, i) => (
          <Child key={i} message={msg} />
        ))}
        <div ref={bottomRef}></div>
      </div>
      <button type="button" onClick={addMessage}>
        메시지 보내기
      </button>
    </div>
  );
}
export default Parent;
