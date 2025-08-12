import { useParams } from "react-router"

function City() {

    // 라우터의 파라미터 가져오는 법
    // 이때 path 에서 정한 키값으로 밸류가 떨어짐
    const {city} = useParams();


  return (
    <div>
        <h2>{city} 의 콘서트 목록</h2>
    </div>
  )
}
export default City