import Link from 'next/link'

export function Navbar(){
    return(
        <nav className="bg-white border-gray-200 ">
            <div className="w-[100%] flex flex-wrap items-center pe-2 bg-sky-100">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse bg-sky-400 p-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-4xl text-white">Test 01</span>
                </Link>
                <div className="flex grow justify-end md:justify-between ps-5">
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-sky-100 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <img className="w-8 h-8 rounded-full" src="https://avatar.iran.liara.run/username?username=Isaac Pena" alt="user photo"/>
                        </button>
                        
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-sky-100 ">
                            <li>
                                <Link href="../Dashboard" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="../Inventory" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Inventory</Link>
                            </li>
                            <li>
                                <Link href="../Orders" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Orders</Link>
                            </li>
                            <li>
                                <Link href="../Receiving" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Receiving</Link>
                            </li>
                            <li>
                                <Link href="../Users" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
