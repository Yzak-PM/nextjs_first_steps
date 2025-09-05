import { Navbar } from '@/components/Navbar.jsx'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: ['normal', 'italic']
})

export default function RootLayout({ children }){
    return(
        <html lang="en">
            <body className='roboto.className'>  
                <Navbar />
                
                {children}
            </body>
        </html>
    )
}