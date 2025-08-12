import type { Movie_list } from "../type"
import CardItem from "./CardItem"


interface Props {
  list: Movie_list[],
  usingPopup:boolean
}


function CardList({list, usingPopup}:Props) {
  return (
    <ul>
      {
        list.map((item)=>(
          <li key={item.id}>
            <CardItem item={item} popup={usingPopup}/>
          </li>
        ))
      }
    </ul>
  )
}
export default CardList