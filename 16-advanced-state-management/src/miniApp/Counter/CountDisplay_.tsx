import S from './style.module.css'

function CountDisplay_({count}:{count:number}) {
  return (
    <output className={S.output}>{count}</output>
  )
}
export default CountDisplay_