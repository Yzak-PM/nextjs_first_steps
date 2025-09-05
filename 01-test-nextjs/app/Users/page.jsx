import { UserList } from '@/app/Users/components/UserList.jsx'

async function loadUsers(){
    const res = await fetch('https://dummyjson.com/users')

    const usersData = await res.json()

    // await new Promise((resolve) => setTimeout(resolve, 3000)) Para testear el loader

    return usersData.users
}

export default async function Users(){
    const userData  = await loadUsers()

    return(
        <ul className="p-4 divide-y divide-gray-200 dark:divide-gray-700">
            {
                userData.map(user => (
                    <UserList
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        username={user.username}
                    ></UserList>
                )) 
            }
        </ul>
    )
}