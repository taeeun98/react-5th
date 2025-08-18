import tw from "@/utils/tw";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

function Button_tw({ children, className, size, disabled }: Props) {
  return <button type="button"
  className={
    tw('bg-sky-500 font-medium rounded-full px-4 py-2 cursor-pointer', 
        size === 'sm' && 'px-2 py-1 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
    )
  }
  >{children}</button>;
}
export default Button_tw;
