import tw from '@/utils/tw'
import S from './style.module.css'
import { memo, useMemo } from 'react'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import CountDisplay_ from './CountDisplay_'
import CountButton_ from './CountButton_'
import useCounter from '@/hook/useCounter'

function Counter({className}:{className?:string}) {

    const C = useCounter();
    const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } = C;

    const incrementLabel = `${step} 증가`;
    const decrementLabel = `${step} 감소`;

  return (
    <div className={tw(S.component, className)}>
        <CountDisplay_ count={count}/> 

        <div role='group' className={S.group}>
            <CountButton_ title={incrementLabel} onUpdate={increment} aria-label={incrementLabel} disabled={isMaxDisabled}>
                {/*
                    아이콘을 전달하고 있어서 계속 화살표 아이콘도 리렌더 일어남.
                    따라서 useMemo로 아이콘 감싸기
                    disabled 될때만 리렌더 시키기
                */}
                {
                    useMemo(()=> <GrFormUp />, [])
                }
            </CountButton_>

            <CountButton_ title={decrementLabel} onUpdate={decrement} aria-label={decrementLabel} disabled={isMinDisabled}>
                {
                    useMemo(()=> <GrFormDown />, [])
                }
            </CountButton_>
        </div>
    </div>
  )
}
export default memo(Counter)