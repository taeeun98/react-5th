import { RouterContext } from "@/router/RouterProvider";
import { useContext } from "react";
import S from "./layout/Header.module.css";
interface Props {
    to: string;
    children: React.ReactNode; //children 은 React.ReactNode 로 받는거 유의하기
    className?:string;
    activeClassName?:string;

}

function NavLink({to, children, className = '', activeClassName = S.active}:Props) {

    const {currentPath, setHistoryRoute} = useContext(RouterContext)!

    const handleLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setHistoryRoute(to);
        history.pushState(null, '', to);
    }

    const isActice = currentPath === to;
    const classNames = `${isActice ? activeClassName : ''} ${className}`.trim();
    
  return (
    <a className={ classNames } href={to} onClick={handleLink}>{children}</a>
  )
}
export default NavLink