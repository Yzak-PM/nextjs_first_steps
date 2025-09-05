export function UserCard({firstName, lastName, email, username}) {
    return (
        <div className="w-full flex justify-center">
            <div className="p-7 bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10 pt-4">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`https://avatar.iran.liara.run/username?username=${firstName} ${lastName}`}  alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{firstName} {lastName}</h5>
                    <span className="text-sm text-gray-500 ">@{username}</span>
                    <span className="text-sm text-gray-500 ">{email}</span>
                </div>
            </div>
        </div>
    )
}