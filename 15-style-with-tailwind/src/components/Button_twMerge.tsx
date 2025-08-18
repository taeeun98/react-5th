import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  type: 'primary' | 'secondary';
}

function Button_twMerge({ children, className, type }: Props) {
  // 컴포넌트에서 정의한 테일윈드 말고 특정 페이지에서 그 컴포넌트에 css 를 덮어쓰고 싶다면?
  // twMerge('컴포넌트 공통 css', 'props로 받은 특정 css', 또 다른 css 연결 ...)
  // 순서 상관 x 그냥 , 로 연결해서 테일윈드 머지
  return (
    <button
      type="button"
      className={twMerge("bg-sky-500 py-2 px-4 rounded-full", className, type === 'primary' ? 'text-white':'text-orange-500' )}
    >
      {children}
    </button>
  );
}

export default Button_twMerge;
