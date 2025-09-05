
async function getUser(id){
    const res = await fetch(`https://dummyjson.com/users/${id}`)

    const userData = res.json() 

    return userData
}

export default async function UserPage({ params }){
    const userData = await getUser(params.id)

    return (
        <div className="w-full flex justify-center">
            <div className="p-7 bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-4 pt-3">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`https://avatar.iran.liara.run/username?username=${userData.firstName} ${userData.lastName}`}  alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{userData.firstName} {userData.lastName}</h5>
                    <span className="text-sm text-gray-500 ">@{userData.username}</span>
                    <span className="text-sm text-gray-500 ">{userData.email}</span>
                    <span className="text-sm text-gray-800 ">{userData.university}</span>
                </div>
            </div>
        </div>
    )
} 