import { useState } from "react";

type Status = "success" | "typing" | "submitting";

function Form() {

  const [answer, setAnswer] = useState('');
  //Status 제네릭을 선언함으로서 리터럴 값만 status 에 허용되도록
  const [status, setStatus] = useState<Status>("typing");
  // Error 가 안뜰수도 있으니 null 도 설정. 기본값은 null
  const [error, setError] = useState<Error | null>(null)



  if (status === "success") {
    return <h1>정답입니다</h1>;
  }



  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // set ... 는 렌더링 트리거가 있다. 그래서 지금 코드는 입력 하나 할때마다 재렌더링중.
    // 이걸 막으려면 handleTextareaChange 함수를 쓰로틀이나 디바운스로 감싸준다.
    // 그래서 타이핑 끝난 시점이나, 몇초에 한번씩만 렌더링 되도록
    // setAnswer 를 하면 값을 set 하고, Form() 함수를 리렌더링 하는것.
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("submitting");


    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      if(err instanceof Error){
        setError(err)
      }
    }
  };

  return (
    <form id="form">
      <h2>프로그래머스 퀴즈</h2>
      <p>프로그래머스에서 가장 잘생긴 사람은?</p>
      <textarea
        id="textarea"
        onChange={handleTextareaChange}
        disabled={ status === "submitting"}
      ></textarea>
      <br />
      <button
        type="submit"
        id="button"
        onClick={handleSubmit}
        disabled={answer.length === 0 || status === "submitting"}
      >
        Submit
      </button>
      {error !== null && <p style={{color:'red'}}>{error.message}</p>}
      {status === "submitting" && <p>loading...</p>}
    </form>
  );
}

export default Form;

const submitForm = (answer: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "심선범") {
        resolve("굿");
      } else {
        reject(new Error("넌 이미 정답을 알고있다"));
      }
    }, 1500);
  });
};
