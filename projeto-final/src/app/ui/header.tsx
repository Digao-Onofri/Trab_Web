import styles from "@/app/styles/header.module.css"
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.header}>
            <Image src="/logo.jpg" alt="logo" width={150} height={150}/>
            <nav>
                <a href="/">Página Principal</a>
            </nav>
        </header>
    );
}