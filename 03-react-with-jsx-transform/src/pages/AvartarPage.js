import { createElement as h } from "../lib/react.js";
import Avatar from "../components/avatar/Avatar.js";


export default function AvatarPage(){

  return h(
    'ul',
    {className:'avatarList'},
    h(Avatar,{name:'짱구',status:'online'}),
    h(Avatar,{name:'원장',status:'dont-disturb'}),
    h(Avatar,{name:'봉미선',status:'offline'}),
    h(Avatar,{name:'유리',status:'away'}),
  )
}