/* eslint-disable @typescript-eslint/no-explicit-any */
interface State {
  [key: string | symbol | number]: any;
}

type StateAction = (key: string, value: any) => void;

// 선언된 상태 관리 미니 툴 API
const createState = (
  data: State,
  callback: () => void
): [Readonly<State>, StateAction] => {
  let allowUpdate: boolean = false;

  // Proxy 를 사용해서 state 가 마치 data 인것마냥 데이터 사용가능
  const state: State = new Proxy(data, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, newValue) {
      // allowUpdate 여기서 활용
      if (!allowUpdate) {
        console.warn('🚫 스토어 데이터를 직접 수정할 수 없습니다.');
        return false;
      }

      target[prop] = newValue;
      callback?.();
      return true;
    },
  });

  // allowUpdate 는 안전장치, action 을 수행했을때만 callback 이 실행되도록
  const action: StateAction = (key: string, value: any) => {
    allowUpdate = true;
    state[key] = value;
    allowUpdate = false;
  };

  return [state, action];
};

export default createState;
