import { useState } from "react";
import { getNoteList, type Note } from "./api/getNote";
import NoteListPage from "./pages/NoteListPage";
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteEditPage from "./pages/NoteEditPage";

function NoteApp() {
  const [routeInfo, setRouteInfo] = useState<{
    route: string;
    noteId: null | number;
  }>({
    route: "list",
    noteId: null,
  });

  // console.log(getNoteList()); // 모든 노트의 데이터 & user 정보까지 // 관계형 데이터
  // const [list, setList] = useState(getNoteList());
  // 콜백으로 연결하면 S 가 매 렌더링 마다 가져오는게 아니라, 처음 딱 한번만 가져옴
  const [list, setList] = useState(() => getNoteList());

  const handleChangeRoute = (nextRoute: string, pickNoteId: number = 0) => {
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId ? pickNoteId : routeInfo.noteId,
    });

    // routeInfo 전개해서 넣는 이유는 기본값 설정을 위함
  };

  // 노트 생성 기능
  const handleCreateNote = (newNoteItem: Note) => {
    setList([...list, newNoteItem]);
  };

  // 노트 수정 함수
  const handleEditNote = (willEditNote: Note) => {
    const nextList = list.map((item) =>
      item.id === willEditNote.id ? willEditNote : item
    );
    setList(nextList);
  };

  // 노트 제거 함수
  const handleDeleteNote = (willEditNoteId: number) => {
    const nextList = list.filter((item) => item.id !== willEditNoteId);
    setList(nextList);
  };

  // 파생상태 (기존의 형태 + 좀더 복잡한 형태를 만든것, 기존 형태에 의존하긴함)
  const newNoteId = list.length + 1;

  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return (
        <NoteDetailPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.create:
      return (
        <NoteCreatePage
          newNoteId={newNoteId}
          onCreate={handleCreateNote}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.edit:
      return (
        <NoteEditPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      );
    default:
      return <div>404 not found</div>;
  }
}

export default NoteApp;
