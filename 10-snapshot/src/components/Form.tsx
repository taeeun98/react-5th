import { useState } from "react";

function Form() {
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <h2>Controlled Input</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>입력 값 : {text}</p>
        <hr />
        <h2>Uncontrolled Input</h2>
        <input
          type="text"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>입력 값 : {text}</p>
      </div>
    </div>
  );
}

export default Form;
