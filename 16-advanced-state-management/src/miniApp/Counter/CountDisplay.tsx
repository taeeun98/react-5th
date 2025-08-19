import { useCountStore } from './@store'
import S from './style.module.css'

function CountDisplay() {

  //  하나 뽑을땐 useShallow 없어도 ㄱㅊ? 
  const count = useCountStore((s)=> s.count);

  return (
    <output className={S.output}>{count}</output>
  )
}
export default CountDisplay