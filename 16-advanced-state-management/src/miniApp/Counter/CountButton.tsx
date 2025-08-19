import { memo, type ButtonHTMLAttributes } from "react";
import S from "./style.module.css";
import { useCountStore } from "./@store";

function CountButton({
  children,
  type = '+',
  ...restProps
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>,'type'> & {
  type?: '+' | '-'
}) {

  // store 값 전체를 구독, 내가 필요없는 항목이 업데이트가 되도 리-렌더링 발생
  // zustand 는 프로바이더 없이 바로 데이터를 inject 하기 용이하다
  // increment는 함수입니다. 
  // const {increment, decrement} = useCountStore();

  // store 의 필요한 값만 구독, 내가 필요없는 항목이 업데이트가 되면 리-렌더링이 일어나지 않음
  const handler = useCountStore((s)=>
  type === '+'? s.increment : s.decrement);

  return (
    <button type="button" className={S.button} {...restProps} onClick={handler} >
      {children}
    </button>
  );
}

// 부모가 바뀌어도 내가 바뀐게없으면 렌더링 안되도록 memo()로 감싸기
export default memo(CountButton);
