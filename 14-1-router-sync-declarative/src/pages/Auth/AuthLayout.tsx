import { Outlet } from "react-router";

function AuthLayout() {
  const S = {
    border: "1px solid black",
    padding: "2rem",
  };

  return (
    <div style={S}>
      <h1>AuthLayout</h1>
      <hr />
      {/*
        AuthLayout 안에 중첩으로 넣은 라우터들이 아울렛에 나와진다.
        (자식 라우터들은 부모 라우터의 Outlet 에 렌더링 된다)
        => 동일한 스타일 레이아웃을 가져갈수있음
      */}
      <Outlet></Outlet>
    </div>
  );
}
export default AuthLayout;
