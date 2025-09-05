import Link from 'next/link';


export function UserList({id, email, firstName, lastName, username}) {
    return (
        <li className="pb-3 pt-3 ">
            <Link href={`/Users/${id}`}>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="shrink-0">
                        <img className="w-8 h-8" src={`https://avatar.iran.liara.run/username?username=${firstName} ${lastName}`} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            {firstName} {lastName}
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                            {email}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-500">
                        @{username}
                    </div>
                </div>
            </Link>
        </li>
    )
}