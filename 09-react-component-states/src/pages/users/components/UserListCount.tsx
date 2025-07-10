interface Props {
    searchUsersCount: number;
    totalUsersCount: number;
}

function UserListCount({searchUsersCount, totalUsersCount}:Props) {
    return (
    <span data-testid="user-list-count">
        {searchUsersCount} / <b>{totalUsersCount}</b> 
    </span>
    )
}

export default UserListCount