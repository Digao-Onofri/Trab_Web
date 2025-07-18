import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header"
import Footer from "@/app/ui/footer"
import styles from "@/app/styles/main.module.css"
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Carros",
  description: "Sistema web com cadastro, listagem e pesquisa de carros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
