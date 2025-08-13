import { Link } from "react-router"

function ConcertsHome() {
  return (
    <div>
    <h1>콘서트 메인 페이지</h1>
    <p>콘서트가 열리는 도시를 선택해보세요.</p>
    <ul>
      <li><Link to="/concerts/seoul">서울</Link></li>
      <li><Link to="/concerts/busan">부산</Link></li>
      <li><Link to="/concerts/daegu">대구</Link></li>
    </ul>
    </div>
  )
}
export default ConcertsHome