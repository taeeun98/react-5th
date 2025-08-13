/*
        Link, NavLink 언제 사용하는가?
        
        GNB (글로벌 네비게이션 바)같은 경우
        (내가 어떤 메뉴를 보고있을땐 그 보고 있는 목록을 활성화 시켜야하는 경우)
        LNB (로컬 네비게이션 바) 도 활성화 해야하니까 NavLink

        근데 그냥 목록 같은 경우는 활성화 필요없고 그냥 넘어가면 되니까 Link 사용
*/

import { NAV } from "@/uitls/nav-config";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function GlobalNav() {
  //   const navList = extractNavItem(routes.routes);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      // localStorage 에서 가져와서 하는 등은 mounted 이후에
      //ex)  localStorage.getItem();
    }
  });

  return (
    <header style={{ padding: 8, borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", gap: 12 }}>
        {NAV.map(({ to, label }) => (
          <NavLink key={to} to={to}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default GlobalNav;
