import React from "react";

interface Props {
    label: string;
    onClick: () => void;
    items: string[]
}

function Child({label, onClick, items}:Props) {
  return (
    <>
        <p>{label}</p>
        <button type="button" onClick={onClick}>자식 버튼</button>
        <ul>
            {items.map((fruit, i)=>(
                <li key={i}>{fruit}</li>
                // 원래는 인덱스를 키로 넣으면 안됨. id를 넣어야하는데 임시방편으로 넣음
            )
        )}
        </ul>
    </>
  )
}
export default React.memo(Child)