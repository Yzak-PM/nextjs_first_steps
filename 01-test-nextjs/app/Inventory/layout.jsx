import Link from 'next/link'

export default function InventoryLayout ({ children }){
    return <>
        <nav>
            <ul className="flex flex-wrap items-center justify-center text-sky-700 ">
                <li>
                    <Link className='me-4 hover:underline md:me-6' href='/Inventory/ActiveParts'>Part Numbers Active </Link>
                </li>
                <li>
                    <Link className='me-4 hover:underline md:me-6' href='/Inventory/InactiveParts'>Part Numbers Inactive </Link>
                </li>
            </ul>
        </nav>

        {children}
    </>
}