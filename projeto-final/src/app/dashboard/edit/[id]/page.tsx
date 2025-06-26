import Menu from "@/app/ui/menu"
import ConexaoBD from "@/app/libs/conexao-bd";
import styles from "@/app/styles/paginas.module.css";
import Form from "@/app/ui/formEditCarro";
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