import { useContext, useId, useState } from "react";
import S from "./Login.module.css";
import supabase from "@/supabase/supabase";
import Swal from "sweetalert2";
import { RouterContext } from "@/router/RouterProvider";

function Login() {
  const userId = useId();
  const pwId = useId();

  const [emailState, setEmailState] = useState("");
  const [pwState, setPwState] = useState("");
  const [errorState, setErrorState] = useState<string|null>(null);
  const {setHistoryRoute} = useContext(RouterContext)!;


/*
1. email 상태 만들기
2. pw 상태 만들기
3. change 이벤트 바인딩
4. submit handler 사용하기
5. supabase 통신하기
6. console.log(로그인 성공) 출력하기
7. 로컬 스토리지 확인하기 (토큰 정보가 떨어졌는지)
8. 로그인 페이지로 리다이렉트
*/

  const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value);
  };

  const handleChangePw = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPwState(e.target.value);
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailState,
      password: pwState,
    })

    if(error) {
      console.log("error : ", error);
      setErrorState(error.message);
    } else {
      console.log("로그인 성공! : ", data);
      Swal.fire({
        text:'로그인에 성공했습니다',
        icon:'success',
      }).then(()=>{
        console.log('이후 처리 동작');
        history.pushState(null,'', '/')
        setHistoryRoute('/')
      })
    }
    
  };

  return (
    <div className={S.container}>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일:</label>
            <input
              type="text"
              name="email"
              id={userId}
              required // 반드시 입력해야 submit 가능
              aria-required // 스크린 리더용: 필수 입력임을 알림
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor={pwId}>비밀번호:</label>
            <input
              type="password"
              name="password"
              id={pwId}
              required
              aria-required
              onChange={handleChangePw}
            />
          </div>
          <button type="submit">로그인</button>
          {
            errorState && <p style={{paddingTop:'1rem', color:'red'}}>{errorState}</p>
          }
          <hr />
          <a href="#" onClick={(e)=>{
            e.preventDefault();
            history.pushState(null, '', '/Register')
            setHistoryRoute('/Register');
          }}>아직도 2.9cm 회원이 아니세요?</a>
        </form>
      </div>
    </div>
  );
}
export default Login;
