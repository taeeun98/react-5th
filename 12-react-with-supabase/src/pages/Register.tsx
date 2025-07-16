import { useId, useState } from "react";
import S from "./Register.module.css";
import supabase from "@/supabase/supabase";
import Swal from "sweetalert2";

function Register() {
  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();
  const avatarId = useId();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pw !== pwConfirm) {
      setError("비밀번호 불일치");
      return;
    }

    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email: id,
      password: pw,
    });

    localStorage.clear();

    if (signUpError || !user) {
      setError(signUpError?.message || "회원가입실패");
      console.log("error : ", error);
      return;
    }

    if (avatarFile) {
      const fileExt = avatarFile.name.split(".").pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = fileName;

      const { data, error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, avatarFile, {
          upsert: true,
        });

      // 이미지 업로드할때 storage - policy 설정해줘야함
      if (uploadError) {
        console.error(uploadError);
        setError("이미지 업로드 실패");
        return;
      }

      console.log(data);
    }

    Swal.fire({
      title: "회원가입 완료",
      text: "로그인 페이지로 이동합니다",
      icon: "success",
    }).then(() => {
      history.pushState(null, "", "/Login");
      location.reload();
    });
  };

  return (
    <div className={S.container}>
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input
            type="email"
            id={emailId}
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input
            type="password"
            id={pwId}
            required
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인</label>
          <input
            type="password"
            id={pwConfirmId}
            required
            onChange={(e) => {
              setPwConfirm(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor={avatarId}>프로필이미지</label>
          <input
            type="file"
            id={avatarId}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setAvatarFile(file);
              console.log(file);

              if (file) {
                // 파일 미리보기 하려면 FileReader 생성자 함수 사용

                const reader = new FileReader();
                reader.onloadend = () => {
                  setAvatarPreview(reader.result as string);
                };
                reader.readAsDataURL(file);
              } else {
                setAvatarPreview(null);
              }
            }}
          />
          {avatarPreview && (
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <img
                src={avatarPreview}
                alt="프로필"
                style={{ width: "80px", height: "80px", borderRadius: "50%", border:'1px solid #ccc'}}
              />
            </div>
          )}
        </div>

        <button type="submit">가입하기</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default Register;
