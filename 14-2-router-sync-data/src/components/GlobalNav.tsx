import { routes } from "@/router/routes"
import extractNavItem from "@/uitls/extractNavItem"
import { NavLink } from "react-router"

// const navList = [
//     {to:'/', label:'Home'},
//     {to:'/about', label:'About'},
//     {to:'/auth/login', label:'Login'},
//     {to:'/auth/register', label:'Register'},
//     {to:'/concerts', label:'Concerts'},
//     {to:'/concerts/trending', label:'Trending'},
// ]

function GlobalNav() {

    const S = {
        display: 'flex',
        gap: '1rem',
        listStyle: 'none'
    }

    const navList = extractNavItem(routes.routes)

    /*
        Link, NavLink 언제 사용하는가?
        
        GNB (글로벌 네비게이션 바)같은 경우
        (내가 어떤 메뉴를 보고있을땐 그 보고 있는 목록을 활성화 시켜야하는 경우)
        LNB (로컬 네비게이션 바) 도 활성화 해야하니까 NavLink

        근데 그냥 목록 같은 경우는 활성화 필요없고 그냥 넘어가면 되니까 Link 사용
    */

    return (
    <nav>
        <ul style={S}>
            {
                navList.map(({path, label})=>(
                    <li key={path}>
                        <NavLink style={({isActive}: { isActive: boolean }) => ({color:isActive ? 'blue' : 'black'})} to={path}>{label}</NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>

  )
}

export default GlobalNav