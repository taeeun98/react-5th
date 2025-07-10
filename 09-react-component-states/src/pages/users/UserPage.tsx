import userData from "@/data/users.json";
import { useState } from "react";
import UserList from "./components/UserList";
import UserSearchBox from "./components/UserSearchBox";
import UserListCount from "./components/UserListCount";
import InstantSearch from "./components/InstantSearch";

function UserPage() {
  /* [상태 선언] -------------------------- */
  const [users] = useState(userData);
  // searchTerm 여기서 관리해야 아래에서 마크업에 다시 렌더링할수있음.
  // 그래서 여기서 userState 하고 자식에게 함수를 전달해야하는것.
  const [searchTerm, setSearchTerm] = useState("");
  const [isInstantSearch, setIsInstantSearch] = useState(false);

  /* [상태 업데이트] -------------------------- */
  //handleSearch, handleReset => UserSearchBox
  const handleSearch = (userInput: string) => {
    setSearchTerm(userInput);
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  const handleToggleInstantSearch = () => {
    setIsInstantSearch(!isInstantSearch);
  };

  /* [파생된 상태 (가공해서 쓰는 데이터)] -------------------------- */
  // 첫 로딩 화면은 searchTerm 기본값이 '' 빈문자열이니,
  // 필터링에 다 true 가 되어서 전체 목록 나옴
  const searchedUsersList = users.filter(
    (user) =>
      user.name.includes(searchTerm) ||
      user.email.includes(searchTerm) ||
      user.city.includes(searchTerm)
  );

  /* [마크업 (JSX)] -------------------------- */
  return (
    <div className="UserPage">
      <InstantSearch
        onToggle={handleToggleInstantSearch}
        isInstantSearch={isInstantSearch}
      />
      <UserSearchBox
        isInstantSearch={isInstantSearch} 
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <UserList users={searchedUsersList} />
      {
        <UserListCount
          searchUsersCount={searchedUsersList.length}
          totalUsersCount={users.length}
        />
      }
    </div>
  );
}
export default UserPage;
