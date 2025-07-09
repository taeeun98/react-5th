interface Props {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  style: React.CSSProperties & { '--color': string };
  children?: React.ReactNode; // 자식은 옵셔널로 해야 마지막자식은 또 다른 자식이 필요하지 않다
  title?: string;
}

function LayoutBox({ onClick, children, ...restProps }: Props) {
  return (
    <div className="box" onClick={onClick} {...restProps}>
      {children}
    </div>
  );
}

export default LayoutBox;
