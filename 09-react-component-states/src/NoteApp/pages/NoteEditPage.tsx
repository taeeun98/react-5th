import { getNoteItem, type Note } from "../api/getNote";
import BackLink from "../component/BackLink";
import NoteForm from "../component/NoteForm";
import { ROUTES } from "../routes";

type Props = {
  onDelete?: (willEditNoteId: number) => void;
  onEdit?: (willEditNote: Note) => void;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
  noteId: number | null;
};

function NoteEditPage({ onEdit, onDelete, onChangeRoute, noteId }: Props) {
  if (!noteId) return;
  const note = getNoteItem(noteId);
  const handleBackLink = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackLink} />

      {note && (
        <>
          <h2>노트 편집</h2>
          <NoteForm
            mode="edit"
            onEdit={onEdit}
            onDelete={onDelete}
            note={note}
            onBackLink={handleBackLink}
          />
        </>
      )}
    </div>
  );
}
export default NoteEditPage;
