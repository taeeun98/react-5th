import type { Note } from "../api/getNote";
import BackLink from "../component/BackLink";
import NoteForm from "../component/NoteForm";
import { ROUTES } from "../routes";

interface Props {
  newNoteId: number;
  onCreate: (newNoteItem: Note) => void;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
}

// id: number;
// title: string;
// content: string;
// createdAt: string;
// userId: number;
// updatedAt?: undefined;
function NoteCreatePage({ newNoteId, onCreate, onChangeRoute }: Props) {
  const handleBackLink = () => {
    onChangeRoute(ROUTES.list);
  };

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackLink}></BackLink>
      <NoteForm
        mode="create"
        newNoteId={newNoteId}
        onCreate={onCreate}
        onBackLink={handleBackLink}
      />
    </div>
  );
}
export default NoteCreatePage;
