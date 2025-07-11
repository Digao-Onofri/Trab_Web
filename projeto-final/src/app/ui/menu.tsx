// Componente menu
'use client'
import styles from "@/app/styles/menu.module.css"
import { deleteSessionCookie } from "../libs/session"
import { redirect } from "next/navigation";
import { buscaAvatar } from "../libs/api-request";

export default function menu(){

    let avatar = 'https://api.dicebear.com/9.x/pixel-art/svg'

    const atualizaAvatar = async () => {
        avatar = await buscaAvatar()
    }
    
    const logout = async () => {
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

            <form action={atualizaAvatar} className={styles.form}>
                <button><img src={avatar} alt="avatar" /></button>
            </form>
        </section>
    );
}   