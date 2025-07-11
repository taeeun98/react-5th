import { convertSlug } from "@/utils/convertSlug";
import { getNoteItem } from "../api/getNote";
import PrintError from "../component/PrintError";
import { ROUTES } from "../routes";
import BackLink from "../component/BackLink";
import "./NoteDetailPage.css";

interface Props {
  noteId: number | null;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
}

function NoteDetailPage({ noteId, onChangeRoute }: Props) {
  if (!noteId) {
    return <PrintError>노트 정보를 불러오지 못했습니다</PrintError>;
  }

  const note = getNoteItem(noteId);
  console.log(note);

  const handleChangeRoute = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.edit, noteId);
  };

  const handleBackLink = () => {
    onChangeRoute(ROUTES.list);
  };


  const createMarkup = () => {
    if(!note) return;
    return {__html:note?.content}
  }

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackLink} />
      {!note && <PrintError>노트를 찾을 수 없습니다</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>
            {note.expand?.user.name}{" "}
            <a
              href={`#/edit/${convertSlug(note.title)}`}
              onClick={handleChangeRoute}
            >
              수정
            </a>
          </span>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </>
      )}
    </div>
  );
}

export default NoteDetailPage;
