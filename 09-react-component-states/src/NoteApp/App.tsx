import { useState } from "react";
import { getNoteList } from "./api/getNote";
import NoteListPage from "./pages/NoteListPage";

function NoteApp() {

  // console.log(getNoteList()); // 모든 노트의 데이터 & user 정보까지 // 관계형 데이터

  // const [list, setList] = useState(getNoteList());
  // 콜백으로 연결하면 S 가 매 렌더링 마다 가져오는게 아니라, 처음 딱 한번만 가져옴
  const [list, setList] = useState(() => getNoteList());

  return (
    <NoteListPage list={list}/>
  )
}

export default NoteApp