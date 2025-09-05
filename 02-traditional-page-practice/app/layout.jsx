import "./globals.css";
import Navbar from '../components/Navbar.jsx';

export const metadata = {
  title: "Tradicional page",
  description: "Yzak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
