import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority";

// cva() 를 실행하면 함수를 반환하기 때문에 반환값 자체를 실행이 가능하다.
const buttonVariants = cva("line-flex items-center rounded-md px-3 py-2", {
  variants: {
    intent: {
      primary: "bg-sky-600 text-white hover:bg-sky-800",
      secondary: "bg-orange-600 text-white hover:bg-orange-800",
      ghost: "bg-gray-400 text-white hover:bg-slate-100",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    },
    block: {
      true: "w-full justify-center",
      false: "",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    block: false,
  },
  // 특정 조건에 부합할때만 추가되는 클래스 (마치 조건식)
  compoundVariants: [
    { intent: "secondary", size: "lg", class: "border border-slate-300" },

    // intent 가 secondary 혹은 ghost 이면서 size 가 lg 일때 해당 클래스 추가
    {
      intent: ["secondary", "ghost"],
      size: "lg",
      class: "border border-slate-300",
    },
  ],
});

// interface Props {
//   children: React.ReactNode;
//   className?: string;
//   size?: "sm" | "md" | "lg";
//   disabled?: boolean;
// }

// 이걸 할당하게 되면, 기본적으로 button이 가지고 있는 속성을 따로 props 를 설정하지 않아도 됨
// ex) className, size, disabled ...
// 거기에 더해서 우리가 만든 cva 타입도 확장시켜주기
// 필요하다면 따로 추가할 속성도 추가
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

function Button_cva({
  children,
  intent,
  size,
  className,
  loading,
  block,
  ...rest
}: ButtonProps) {
  // console.log(buttonVariants); // function .... 어쩌고
  // console.log(buttonVariants()); //line-flex items-center rounded-md px-3 py-2 (기본값 설정한거)
  console.log(buttonVariants({ intent, size })); // 앞에서 컴포넌트에 넘긴 속성값에 해당하는 variants 까지 같이 나열됨

  // ...rest 나머지 파라미터로 받은거 중에 disabled 있는지 체크 (옵셔널)
  return (
    <button
      type="button"
      disabled={loading || rest.disabled}
      className={tw(
        buttonVariants({ intent, size, block }),
        className,
        loading ? "bg-amber-400" : "bg-pink-500"
      )}
      
      // rest 에 함수가 넘어올 경우 바인딩 하기 위해 뿌려줌
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button_cva;
