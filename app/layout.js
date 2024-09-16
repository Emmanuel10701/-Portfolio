import { Inter } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My portfilio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}