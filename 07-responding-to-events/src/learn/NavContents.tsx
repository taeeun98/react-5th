import type React from "react";

function NavContents() {
  //컴포넌트 안에서 대상을 찾거나 수정하는 행위는 사이드 이펙트 ! xxx
  // a태그를 잡아서 클릭 이벤트를 바인딩
  //   const firstLink = document.querySelector(
  //     '[href="#jsx-markup"]'
  //   ) as HTMLAnchorElement;
  //   firstLink.dataset.element = "jsx-markup";

  const handleClickFirstLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("first clicked!");

    // 이벤트 핸들러 안에서는 사이드 이펙트를 처리하기에 아주 완벽한 공간
    const firstLink = document.querySelector(
      '[href="#jsx-markup"]'
    ) as HTMLAnchorElement;

    console.log(firstLink);

    //document.querySelector(...)는 DOM 접근 방식이며, 일반적으로 React에서는 지양하고
    // e.currentTarget 같은 이벤트 객체를 사용하는 것이 더 깔끔하고 안전
    // firstLink.dataset.element = 'jsx-markup';
    //e.currentTarget.dataset.element = 'jsx-markup'은
    // 해당 이벤트가 발생한 <a> 태그에 data-element="jsx-markup" 속성을 동적으로 추가
    e.currentTarget.dataset.element = "jsx-markup";
  };

  const handleClickSecondLink = (e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    e.currentTarget.dataset.element = 'responding-to-events'
  }


  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup" onClick={handleClickFirstLink}>
        JSX 마크업
      </a>
      <a href="#responding-to-events" onClick={handleClickSecondLink}>이벤트 응답</a>
    </nav>
  );
}

export default NavContents;
