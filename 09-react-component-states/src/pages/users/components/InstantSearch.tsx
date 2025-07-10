import { useId } from "react";

interface Props {
  onToggle: () => void;
  isInstantSearch: boolean;
}

function InstantSearch({ onToggle, isInstantSearch }: Props) {
  // 접근성 향상을 위해 <label>과 <input>을 안전하게 연결할 때 사용하는 훅
  const id = useId();

  return (
    <div className="formControl">
      {/* htmlFor={id} 와 id={id}는 label 클릭 시 해당 input 포커스 되도록 연결해줌 */}
      <label htmlFor={id} style={{ userSelect: "none" }}>
        <input
          type="checkbox"
          id={id}
          onClick={onToggle}
        //  react 가 상태값 조정하지 않고 내가 조정하고 싶다 -> dom 이 제어할수있게
        // checked(컨트롤드 컴포넌트) -> defaultChecked (언컨트롤드 컴포넌트)
          defaultChecked={isInstantSearch}
        />{" "}
        인스턴트 서치
      </label>
    </div>
  );
}

export default InstantSearch;
