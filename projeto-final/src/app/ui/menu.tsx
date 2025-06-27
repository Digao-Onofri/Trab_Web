// Componente menu

import styles from "@/app/styles/menu.module.css"

export default function menu(){
    return(
        <section className={styles.section}>
            <button><a href="/main/inicio">Início</a></button>
            <button> <a href="/dashboard/creater">Adicionar</a></button>
            <button> <a href="/main/list/">Listar</a></button>
            <button><a href="/.">Sair</a></button>
        </section>
    );
}