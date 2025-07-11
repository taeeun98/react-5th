import type { Note } from "../api/getNote";
import NoteList from "../component/NoteList";
import "./NoteListPage.css";
import { ROUTES } from "../routes";

interface Props {
  list: Note[];
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
}

function NoteListPage({ list, onChangeRoute }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create);
  };

  return (
    <div className="NoteListPage">
      <NoteList list={list} onChangeRoute={onChangeRoute}/>

      <a href="#create-note" className="createNoteLink" onClick={handleClick}>
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
