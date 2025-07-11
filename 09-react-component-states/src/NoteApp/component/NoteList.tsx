import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import './NoteList.css'
import { ROUTES } from "../routes";


interface Props {
  list:Note[];
  onChangeRoute:(nextRoute:string, pickNoteId?:number)=>void
}


function NoteList({list, onChangeRoute}:Props) {

const handleClick = (pickNoteId: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();  // a 태그의 기본 동작(이동) 막기
  onChangeRoute(ROUTES.detail, pickNoteId);  // 라우트 변경
  console.log(pickNoteId);  // 클릭된 노트 ID 확인용 로그
}


  return (
     <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
          {
            list.map(item => {
              const slug = `#${convertSlug(item.title)}`
              return(
                <li key={item.id} >
                  <a href={slug} onClick={handleClick(item.id)}>{item.title}</a>
                </li>
              )
            })

          }
      </ul>
    </div>
  )
}

export default NoteList