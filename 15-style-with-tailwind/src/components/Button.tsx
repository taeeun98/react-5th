import tw from "@/utils/tw";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className }: Props) {
  return (
    <button
      type="button"
      className={tw("cursor-pointer px-2 py-1 bg-black text-white rounded-4xl", className)}
    >
      {children}
    </button>
  );
}
export default Button;
