

export function TaskLi2({tasksDataFromDB}){
    return(
        <ul className="p-4 divide-y divide-gray-200 dark:divide-gray-700">
            {
                tasksDataFromDB.map(task => (
                    <li className="pb-3 pt-3 " key={task.id}>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    {task.title}
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    {task.description}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-500">
                                {task.createdAt}
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}