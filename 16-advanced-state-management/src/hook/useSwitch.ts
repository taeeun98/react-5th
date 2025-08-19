import { useCallback, useId, useState } from "react";

type UseSwitchOptions = {
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (next:boolean) => void;
    id?: string;
    disabled?: boolean;
}


export function useSwitch(opts:UseSwitchOptions = {}) {
    
    const {
        defaultChecked = false,
        checked,
        onChange,
        id,
        disabled
    } = opts;

    const [uncontrolled, setUncontrolled] = useState(defaultChecked);

    const reactId = useId();

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : uncontrolled;

    // 커스텀 훅 만들땐 useCallback, useMemo 자주 사용된다
    // 굳이 다시 그릴 필요없는 것을 저장하는 용도
    const setChecked = useCallback( // 버튼을 눌렀을때 강제 지정
        (next:boolean) => {
            if(!isControlled) setUncontrolled(next);
            onChange?.(next)
        },
        [isControlled, onChange]
    )

    const toggle = useCallback(()=> {
        if(disabled) return;
        
        setChecked(!isChecked);
    }, [disabled, isChecked, setChecked])

    const a11yProps = { // 태그 속성으로 들어갈 것
        id: id ?? reactId,
        role: 'switch' as const,
        'aria-label': String(isChecked),
        'aria-disabled' : disabled || undefined,
        tabIndex: disabled ? -1 : 0,
        // event binding
        onClick: () => toggle(),
        onKeyDown: (e:React.KeyboardEvent) => {
            if(disabled) return;
            if(e.key === 'Enter' || e.key === ' '){
                e.preventDefault();
                toggle();
            }
            if(e.key === 'ArrowLeft') setChecked(false);
            if(e.key === 'ArrowRight') setChecked(true);
        }
    }

    // 밖에선 chekced 를 쓰니까 이 이름으로 내보내기
    return { checked:isChecked, setChecked, toggle, a11yProps, disabled }
}