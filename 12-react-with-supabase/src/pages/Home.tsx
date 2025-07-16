import { useEffect, useRef } from 'react';
import S from './Home.module.css';
import gsap from 'gsap'

function Home() {

    const textRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        // console.log(textRef.current?.children);
        if(textRef.current){
            gsap.fromTo(textRef.current.children, {
                x:40,
                opacity:0,
            },{
                x:0,
                opacity:1,
                stagger:0.3
            })
        }
        
    }) 

  return (
    <div className={S.container}>
        <div ref={textRef}>
            <h2><strong>2.9cm</strong> is</h2>
            <span>everthing</span>
        </div>

        <img src="/visual.webp" alt="이미지" />
    </div>
  )
}
export default Home