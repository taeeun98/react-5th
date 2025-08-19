import tw from '@/utils/tw'
import S from './style.module.css'
import { memo, useMemo } from 'react'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import CountButton from './CountButton'
import CountDisplay from './CountDisplay'
import { useCountStore } from './@store'
import { useShallow } from 'zustand/shallow'

function Counter({className}:{className?:string}) {
    
    
    // 이건 통째로 가져와서 구조분해 하는건데 이건 권장x
    // const {step} = useCountStore();

    // 이건 예전 버전(v4+)에서 배열/객체에 넣어 뽑아쓰는거 가능했는데, 지금은 안됨x
    // const step = useCountStore((s)=> [s.count, s.step], shallow);

    // 이젠(v5+) useShallow 라는 훅을 사용해서 함수가 아닌 값만 딱 가져올수있음
    const [count, step, min, max] = useCountStore(useShallow((s)=> [s.count, s.step, s.min, s.max]))

    const isMinDisabled = count <= min;
    const isMaxDisabled = count >= max;

    const incrementLabel = `${step} 증가`;
    const decrementLabel = `${step} 감소`;

  return (
    <div className={tw(S.component, className)}>
        <CountDisplay /> 

        <div role='group' className={S.group}>
            <CountButton type='+' title={incrementLabel} aria-label={incrementLabel} disabled={isMaxDisabled}>
                {/*
                    아이콘을 전달하고 있어서 계속 화살표 아이콘도 리렌더 일어남.
                    따라서 useMemo로 아이콘 감싸기
                    disabled 될때만 리렌더 시키기
                */}
                {
                    useMemo(()=> <GrFormUp />, [])
                }
            </CountButton>

            <CountButton type='-' title={decrementLabel}  aria-label={decrementLabel} disabled={isMinDisabled}>
                {
                    useMemo(()=> <GrFormDown />, [])
                }
            </CountButton>
        </div>
    </div>
  )
}
export default memo(Counter)