import { useId } from "react";
import { Form } from "react-router";

// @ts-ignore
import type {Route} from './+types/newUser.tsx'


export const meta = () => ([
  {title: 'new | user generator'}
])



export async function clientAction({request}:Route.ClientActionArgs) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  console.log(name, email);
}





function NewUser() {
  const nameId = useId();
  const emailId = useId();

  return (
    <div>
      <h2>새로운 유저 추가</h2>
      {/* 리액트 라우터에서 제공하는 Form 사용 */}
      {/* NewUser 안의 submit 실행될떄 action 이 실행된다 */}
      <Form method="post">
        <div>
          <label htmlFor={nameId}></label>
          <input
            id={nameId}
            type="text"
            name="name"
            placeholder="이름"
            required
          />
        </div>

        <div>
          <label htmlFor={emailId}></label>
          <input
            id={emailId}
            type="email"
            name="email"
            placeholder="이름"
            required
          />
        </div>

        <button type="submit">등록</button>
      </Form>
    </div>
  );
}
export default NewUser;
