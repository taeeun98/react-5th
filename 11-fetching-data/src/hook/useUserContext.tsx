import { UserContext } from "@/components/context/UserContext";
import { useContext } from "react";

export function useUserContext() {
    // 리액트 19부터 useContext 대신 use 라고만 써도 됨.
  const ctx = useContext(UserContext)!;

  if (!ctx)
    throw new Error("useUserContext는 <UserContext>안에서 사용해야합니다.");
  return ctx;
}
