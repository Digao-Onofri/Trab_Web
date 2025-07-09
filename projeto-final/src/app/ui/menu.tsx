// Componente menu

import styles from "@/app/styles/menu.module.css"
import { deleteSessionCookie } from "../libs/session"
import { redirect } from "next/navigation";

export default function menu(){

    const logout = async () => {
        'use server';
        await deleteSessionCookie();
        redirect('/login');
        }

    return(

        <section className={styles.section}>
            <button><a href="/main/inicio">Início</a></button>
            <button> <a href="/dashboard/creater">Adicionar</a></button>
            <button> <a href="/main/list/">Listar</a></button>

            <form action={logout} className={styles.form}>
                <button>Sair</button>
            </form>
        </section>
    );
}   