import { UserCard } from '../components/UserCard.jsx'
import Users from '../page.jsx'
import { Suspense } from 'react'


async function loadUser(userId){
    const res = await fetch('https://dummyjson.com/users/' + userId)

    const userData = await res.json()

    return userData
}

export default async function userPage({params}) {

    const userData = await loadUser(params.userId)

    return (
        <div className='p-5'>
            <UserCard
                key={userData.id}
                firstName={userData.firstName}
                lastName={userData.lastName}
                email={userData.email}
                username={userData.username}>
            </UserCard>

            <div className='mt-10'>
            <hr />
                <h1 className='text-lg font-semibold'>Mas usuarios...</h1>
            </div>
            
            <Suspense fallback={<h1>Cargando mas usuarios...</h1>}>
                <Users></Users>
            </Suspense>
        </div>

    )
}