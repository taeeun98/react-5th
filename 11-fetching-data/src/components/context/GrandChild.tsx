import { useUserContext } from "@/hook/useUserContext";
import { useTheme } from "./ThemeContext";

function GrandChild() {
  // 여기서 정확히는 보통 ctx 라고 줄여부르는 context 라는 객체가 나옴
  const { userName, setUserName } = useUserContext();
  const { theme:{colors, spacing}, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: colors.background,
        color: colors.primary,
        border: "1px solid black",
        padding: spacing.md,
      }}
    >
      <h4>바뀐다 333</h4>
      <button type="button" onClick={toggleTheme} style={{padding:spacing.md}}>테마 바꾸기</button>
      <p style={{ marginBottom: spacing.lg }}>안녕하세요 {userName}님</p>
      <button
        type="button"
        onClick={() => {
          setUserName("김정주");
        }}
      >
        나도 사용자 변경 !
      </button>
    </div>
  );
}
export default GrandChild;
