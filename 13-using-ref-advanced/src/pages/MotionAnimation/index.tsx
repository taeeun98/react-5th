import AnimationDemo from './components/AnimationDemo'
import S from './style.module.css'

function MotionAnimation() {
  return (
    <main className={S.container}>
      <h1 lang="en">animate()</h1>
      <div className={S.description}>
        <p>
          Framer-Motion 라이브러리를 사용해 실제 DOM 노드에 애니메이션을 적용합니다.
        </p>
        <p>
          자세한 사용 방법은 
          <a href="https://motion.dev/docs/animate">animate()</a>
           문서를 참고합니다.</p>
      </div>

      <h2 className={S.headline2}>애니메이션</h2>
      <AnimationDemo />
    </main>
  )
}
export default MotionAnimation