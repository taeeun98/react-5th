import { clsx } from "clsx";

interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

// clsx = 클래스명을 조합해서 조건부 처리 할때 사용
// 테일윈드 뿐 아니라 그냥 리액트에서도 클래스 명 합쳐줘서 자주 사용
// 근데 문제는 병합을 시켜주진 않음 => 중복되면 중복된채로 클래스명에 들어감
// => 그래서 보통 clsx 랑 twMerge 를 같이 쓰는 것을 유틸에 tw.ts 헬퍼 함수만들어서 씀
// 파일 명은 보통 cn.ts 로 많이 씀

function Button_clsx({ children, size, className }: Props) {
  return (
    <button
      type="button"
      className={
        clsx(
        "bg-sky-500 px-4 py-2 rounded-xl",
        size === "sm" && "px-2 py-1 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )
    }
    >
      {children}
    </button>
  );
}
export default Button_clsx;
