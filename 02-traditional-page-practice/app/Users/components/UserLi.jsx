"use client";
import Link from 'next/link'

export function UserLi({usersData}){
    return (
        <ul className="p-4 divide-y divide-gray-200 dark:divide-gray-700">
        {
            usersData.map(user => (
                <Link href={`/Users/${user.id}`} key={user.id}>
                    <li className="pb-3 pt-3 ">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="shrink-0">
                                <img className="w-8 h-8" src={`https://avatar.iran.liara.run/username?username=${user.firstName} ${user.lastName}`} alt="" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    {user.firstName} {user.lastName}
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    {user.email}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-500">
                                @{user.username}
                            </div>
                        </div>
                    </li>
                </Link>
            ))
        }
        </ul>
    )
} 