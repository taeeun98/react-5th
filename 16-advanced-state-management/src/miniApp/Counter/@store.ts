import { create } from "zustand";

type Store = {
  count: number;
  step: number;
  max: number;
  min: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (newStep: number) => void;
};

// set, get, store 등 받을 수 있음
// Zustand 는 전부 다 객체를 내보내야 한다. ({}) 이렇게
// 타입 지정은 create 뒤에 제네릭 열어서 <Store>
// 그리고 제네릭 뒤에 () 실행시켜준다
// create()() 이렇게 두번 실행하는걸 쿼링 펑션 이라고 한다.
// 일단 한번 실행시켜서 타입추론을 시킨다
// 나중에 미들웨어(devtools() 등..) 넣게 되면
// 실행 안시키면 미들웨어 타입 추론이 잘 안됨
// export const useCountStore = create<Store>()((set)=>({

//     count:1,
//     step:1,
//     // state 에는  count, step 값이 나온다.
//     increment: () => set((state)=>({ count: state.count + 1 })),
//     decrement: () => set((state)=>({ count: state.count - 1 })),
// }));

export const useCountStore = create<Store>()((set, _get, store) => {

  const increment = () => {
    set(({ count, step, max }) => {
      let nextCount = count + step;
      if (nextCount >= max) nextCount = max;
      return { count: nextCount };
    });
  };

  const decrement = () => {
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });
  };

  const setStep = (newStep:number) => {
    set({step:newStep});
  }

    //여기 다시 찾아보기 getInitialState..?
    //스토어가 처음 생성될 때의 상태 스냅샷을 돌려준다
  const reset = () => set(store.getInitialState())

  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    setStep,
    reset
  };
});
