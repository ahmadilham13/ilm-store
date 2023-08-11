import Footer from "./footer";
import NavbarDefault from "./navbar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Main({ children }) {
  return (
    <>
      <NavbarDefault />
      <main className={`flex min-h-screen flex-col ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
