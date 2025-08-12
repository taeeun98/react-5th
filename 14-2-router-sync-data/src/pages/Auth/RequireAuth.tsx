import useAuth from "@/hook/useAuth";
import type React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuth();
  console.log(isAuth);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  console.log(navigate);

  // navigate 함수 호출하면 무한루프 -> useEffect 에 써야함
  // 첫번째 인자로 이동할 곳, 두번째 인자는 option. 가지고 갈 값
  // 두번째 인자로 원래 있던 위치를 보내서 로그인 후 다시 원래 있던 위치로 돌아오게.

  // state: 로그인 성공 후  하면 원래 보던 위치로
  // replace: 뒤로가기 방지
  // preventScrollReset: 스크롤 맨 위로 리셋되는 동작 차단
  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/login", { state:{from:location}, replace:true, preventScrollReset:true});
    }
  });

  return <>{children}</>;
}
export default RequireAuth;
