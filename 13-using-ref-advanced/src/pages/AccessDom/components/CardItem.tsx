import type { Movie_list } from "../type"
import S from '../style.module.css'
import { TILT_CONFIG } from "./tiltConfig";
import VanillaTilt from "vanilla-tilt";
import { useRef } from "react";

type Props = {
  item:Movie_list,
  popup:boolean
}



function CardItem({item, popup}: Props) {



  const titleRef = useRef<HTMLParagraphElement | null>(null);

  const { href, label, images } = item;

  const refCallback = (el:HTMLAnchorElement /* domElementNode 떨어짐 */) => {
    // 실제 DOM 요소 노드 접근 가능함
    console.log(el);

    VanillaTilt.init(el, TILT_CONFIG);
  }

  // 카드에 마우스 올렸을때 label 보이게
  const handleEnter = () => {
    //ref 로 label 잡아서 style 수정
    const title  = titleRef.current!;
    title.style.opacity = '1';
  } 
  
  //카드에 마우스 떠났을때 label 안보이게
  const handleLeave = () => {
     const title  = titleRef.current!;
    title.style.opacity = '0';
  } 

  const cardClassNames = `${S.card} ${popup ? S.popup : ''}`.trim();

  return (
    <a 
      ref={refCallback}
      href={href}
      title={label}
      aria-label={label}
      // 리액트 17부터는 onPointerEnter 권장
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >

    <figure className={cardClassNames}>
      <div className={S.wrapper}>
        <img src={images.src} alt="" />
      </div>
      <p ref={titleRef}>{label}</p>
      <img className={S.character} src={images.character} alt="" />
    </figure>

    </a>
  )
}
export default CardItem