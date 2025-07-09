import { Fragment } from "react/jsx-runtime";
import Avatar from "../components/Avatar";

interface Props {
  list: AvatarData[];
}

const anotherData = {
  count :10
};


// [1]mount -> unmount -> [3]mount
function AvatarListPage(props: Props) {
  // 배열 객체의 pop() 메서드 사용
  // 인입값은 원본 데이터(props.list) -> 뮤테이션(mutation, 수정)
  // 원본 데이터를 강제로 수정 => 리액트 세상 구속
  // props.list.pop()
  // console.log( props.list );

  // 외부 데이터인 props에 의존한 파생된 데이터
  // props는 읽기 전용 데이터입니다. 전달 받은 하위 컴포넌트에서 수정하면 안된다. (구속)

  // 로컬 뮤테이션(local mutation) 지역 내 수정은 허용이 된다
  const myList = [...props.list];
  // const myList = Array.from(props.list);
  // const myList = Array.prototype.slice.call(props.list);
  console.log(myList);
  

  // let renderCount = 0;
  // setInterval(() => {
  //   console.log(renderCount);
  //   document.getElementById("app")!.dataset.render = String(++renderCount);
  // }, 1000);



  /*
위 코드는 컴포넌트가 렌더링될 때마다 실행됩니다.
타이머나 외부 동작은 그 사이클과 독립적으로 움직이기 때문에(browser API)
side Effect입니다.
*/





  // JSX
  return (
  <ul className="avatarList">
    {
      myList.map((user: AvatarData) => (
        <Fragment key={user.id}>
          <Avatar key={user.id} user={user} />
          {anotherData.count++}
        </Fragment>
      ))
    }
  </ul>
);

}
export default AvatarListPage;
