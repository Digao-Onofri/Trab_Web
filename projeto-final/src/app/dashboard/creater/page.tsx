import Menu from "@/app/ui/menu"
import styles from "@/app/styles/paginas.module.css"
import Form from "@/app/ui/formCadCarro"

// Creater do cadastro de carro

export default function Creater(){
    return(
        <>
        <div className={styles.menu}>
            <Menu />
        </div>
        <div className={styles.conteudo}>
            <Form />
        </div>
        </>
    );
}