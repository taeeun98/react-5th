import { memo } from "react"

function Divider() {
  return (
    <hr className="my-8 border-t-[0.5px] border-solid border-accent w-1/4 max-w-md"/>
  )
}
// memo 가 어떨때 사용되더라 ㅠㅠ
// 부모가 바뀌어도 해당 자식 컴포넌트는 바뀌지 않을때?
export default memo(Divider)