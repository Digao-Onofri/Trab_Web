import ConteudoInicio from "@/app/ui/conteudoInicio";
import Menu from "@/app/ui/menu"
import styles from "@/app/styles/paginas.module.css"

export default function inicio(){
    return(
        <>
        <div className={styles.menu}>
            <Menu />
        </div>
        <div className={styles.conteudo}>
            <ConteudoInicio />
        </div>
        </>
    );
}