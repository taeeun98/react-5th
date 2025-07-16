import supabase from "@/supabase/supabase";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// AuthProvider 쓰는 이유 : 특정 상태를 전 페이지에서 공유하려고
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // localStorage 에 있는 auth 의 user 정보를 가져와주는건 getSesstion().session.user 이고
    // 클라이언트 단에선 이게 빠르지만, 서버에선 안전한 데이터가 아닐수있어서
    // supabase.auth.getUser() 는 데이터베이스에서 객체를 가져온다
    // data안에 data 안에 user 가 들어있는 구조
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({ id: user.id, email: user.email! });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser({ id: session.user.id, email: session.user.email! });
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    //이 구독은 페이지를 떠나도 계속 남아있는 콜백이므로, 컴포넌트가 사라지면 불필요한 콜백 호출, 메모리 누수, 예상치 못한 동작이 발생할 수 있어요
    //따라서 clean-up 시점에 구독 해제(unsubscribe)를 해줘야 합니다.
    return () => listener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext value={{ user, isAuth: !!user, logout }}>
      {children}
    </AuthContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("<AuthProvider> 안에서만 사용할 수 있습니다");
  return ctx;
}
