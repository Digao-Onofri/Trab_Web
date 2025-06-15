// Componente formulario de cadastro

import styles from "@/app/styles/formCadastro.module.css"

export default function Cadastro(){
    return(
        <div className={styles.div}>
            <form action="" className={styles.cadastro}>
                <h1>Cadastro</h1>
                <input type="text" placeholder="Nome"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmar Senha"/>
                <button><a href="/.">Cadastrar</a></button>
            </form>
        </div>
    );
}