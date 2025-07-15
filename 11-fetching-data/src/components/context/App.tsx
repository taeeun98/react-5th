import { useState } from "react";
import Parent from "./Parent";
import { UserContext } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [userName, setUserName] = useState("심선범");

  return (
    // value 가 모든 UserContext 에게 프로바인딩 시작
    // UserContext = 프로바이더
    <ThemeProvider>
      <UserContext value={{ userName, setUserName }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <h1>버튼을 클릭하면 사용자가 변경됩니다</h1>
          <Parent />
          <button
            type="button"
            onClick={() => {
              setUserName("이승은");
            }}
          >
            사용자 변경
          </button>
        </div>
      </UserContext>
    </ThemeProvider>
  );
}
export default App;
