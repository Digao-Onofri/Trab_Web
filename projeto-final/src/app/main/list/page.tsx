import Menu from "@/app/ui/menu"
import styles from "@/app/styles/paginas.module.css"

export default function List(){
    return(
        <>
        <div className={styles.menu}>
            <Menu />
        </div>
        <div className={styles.conteudo}>
            
        </div>
        </>
    );
}