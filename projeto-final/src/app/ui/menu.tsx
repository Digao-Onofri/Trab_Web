import styles from "@/app/styles/menu.module.css"

export default function menu(){
    return(
        <section className={styles.section}>
            <button>Início</button>
            <button>Adicionar</button>
            <button>Listar</button>
            <button><a href="/.">Sair</a></button>
        </section>
    );
}