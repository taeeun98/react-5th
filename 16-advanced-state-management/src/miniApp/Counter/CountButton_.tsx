import { memo, type ButtonHTMLAttributes } from "react";
import S from "./style.module.css";

function CountButton_({
  children,
  onUpdate,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement> & {onUpdate: ()=>void;}) {
  return (
    <button type="button" className={S.button} {...restProps} onClick={onUpdate}>
      {children}
    </button>
  );
}

// 부모가 바뀌어도 내가 바뀐게없으면 렌더링 안되도록 memo()로 감싸기
export default memo(CountButton_);
