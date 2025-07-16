import { routes } from "@/router/router";
import S from "./Header.module.css";
import NavLink from "../NavLink";
import { useAuth } from "@/auth/AuthProvider";
import Swal from "sweetalert2";
import { getAvatarUrl } from "@/api/getAvatarUrl";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const { user, isAuth, logout } = useAuth();

  const [avatar, setAvatar] = useState("");
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  // console.log(user);

  const visibleRoutes = routes.filter(({ title }) => {
    if (isAuth) return title !== "로그인" && title !== "회원가입" && title !== "상품상세";
    else return title !== "회원가입";
  });

  useEffect(() => {
    

    const fetchAvatarUrl = async () => {
      if (!user) return;

      const url = await getAvatarUrl(user?.id);
      
      if (url) {
        setAvatar(url);
        setIsAvatarLoaded(true);
      } else {
        setIsAvatarLoaded(false);
      }
    };

    fetchAvatarUrl();
  }, [user]);

  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <ul style={{alignItems:'center'}}>
          {visibleRoutes.map(({ title, path }) => (
            <li key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
          {isAuth && (
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();

                  Swal.fire({
                    title: "진짜 로그아웃?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "로그아웃",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logout();
                    }
                  });
                }}
                href=""
              >
                로그아웃
              </a>
            </li>
          )}
          {(
            isAvatarLoaded && <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src={avatar ?? '/vite.svg'}
              alt="아바타"
            />
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
