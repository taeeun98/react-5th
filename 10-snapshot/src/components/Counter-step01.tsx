import { useState } from "react";

function Counter() {

  const [number, setNumber] = useState(0);

  const handleClick = () => {
    // ++number 이런거 말고, 그냥 식으로 넣어야함. 새로운 값을 할당해야함
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };

  return (
    <>
      <h1> {number} </h1>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </>
  );
}

export default Counter;
