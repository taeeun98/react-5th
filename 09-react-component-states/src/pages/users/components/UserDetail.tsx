import type { UserType } from "../types/user"

interface Props {
    user: UserType
}

const S = {color:'inherit', textDecoration: 'none'}

function UserDetail({user}:Props) {

    return (
        <li>
            <strong>{user.name}</strong>
            {' '}
            -
            {' '}
            <span>
                <a style={S} href={`mailto:${user.email}`}>
                    {user.email}({user.city})
                </a>
            </span>
        </li>
    )
}

export default UserDetail