import getRandom from "@/util/getRandom";
import type { JSX } from "react";

interface Props {
  statusMessage : StatusMessage[];
}


// props.statusMessage 로 전달됨
function DataBinding({statusMessage}:Props):JSX.Element {

  const message = statusMessage[getRandom(statusMessage.length - 1)];

  return (
    <>
      <dt> 데이터바인딩 (data binding) </dt>
      <dd>
        <p>상태 메세지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">{message}</span>
      </dd>
    </>
  )
}

export default DataBinding;
