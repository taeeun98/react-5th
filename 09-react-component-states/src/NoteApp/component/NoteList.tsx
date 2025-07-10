import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import './NoteList.css'


interface Props {
  list:Note[]
}


function NoteList({list}:Props) {
  return (
     <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
          {
            list.map(item => {
              const slug = `#${convertSlug(item.title)}`
              return(
                <li key={item.id}>
                  <a href={slug}>{item.title}</a>
                </li>
              )
            })

          }
      </ul>
    </div>
  )
}

export default NoteList