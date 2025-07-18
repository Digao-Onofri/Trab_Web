// Componente formulario de cadastro

import styles from "@/app/styles/formCadastro.module.css"
import Link from "next/link";

export default function Cadastro(){
    return(
        <div className={styles.div}>
            <form action='' className={styles.cadastro}>
                <h1>Cadastro</h1>
                <input type="text" placeholder="Nome"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmar Senha"/>
                <button><Link href="/">Cadastrar</Link></button>
            </form>
        </div>
    );
}