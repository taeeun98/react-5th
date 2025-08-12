import { useState } from "react";
import S from "./style.module.css";
import CardList from "./components/CardList";
import F1 from "@/pages/AccessDom/assets/f1.png";
import Conan from "@/pages/AccessDom/assets/conan.png";

const MOVIE_LIST = [
  {
    id: 1,
    href: "https://cgv.co.kr/cnm/cgvChart/movieChart/89706",
    label: "F1 더 무비",
    images: {
      src: "https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89706/89706_320.jpg",
      character: F1,
    },
  },
  {
    id: 2,
    href: "https://cgv.co.kr/cnm/cgvChart/movieChart/89816",
    label: "명탐정 코난 : 척안의잔상",
    images: {
      src: "https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89816/89816_320.jpg",
      character: Conan,
    },
  },
];

function AccessDom() {
  const [movieList] = useState(MOVIE_LIST);
  const [usingPopup, setUsingPopup] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsingPopup(e.target.checked);
  };

  return (
    <main className={S.container}>
      <h1>Access - dom</h1>
      <div style={{marginBottom:'5rem'}}>
        <p>
          리액트 DOM이 아닌, 실제 DOM 노드에 접근하여 조작하는 방법을
          학습합니다.
        </p>
        <p>
          <a href="https://micku7zu.github.io/vanilla-tilt.js/">
            vanilla-tilt.js
          </a>
          를 사용해 컴포넌트 DOM 노드에 3D 틸트 이벤트를 설정해보세요.
        </p>
        <label>
          <input type="checkbox" checked={usingPopup} onChange={handleToggle} />
          팝업 효과 켜기/끄기
        </label>
      </div>
      <CardList list={movieList} usingPopup={usingPopup}/>
    </main>
  );
}
export default AccessDom;
