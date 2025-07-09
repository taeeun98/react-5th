import { Avatar } from "../components/Avartar";

function AvatarListPage() {
  return (
    <ul className="avatarList">
      <Avatar name="jjangu" status="online" />
      <Avatar name="jjanga" status="online" />
      <Avatar name="wonjjang" status="online" />
      <Avatar name="maenggu" status="online" />
      <Avatar name="hooni" status="online" />
      <Avatar name="yuri" status="online" />
      <Avatar name="miseon" status="online" />l
    </ul>
  );
}

export default AvatarListPage;