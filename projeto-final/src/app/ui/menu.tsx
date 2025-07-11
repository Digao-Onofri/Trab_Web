// Componente menu

import styles from "@/app/styles/menu.module.css"
import { deleteSessionCookie } from "../libs/session"
import { redirect } from "next/navigation";
import axios from 'axios';

export default function menu(){

    const avatares = ['Katherine', 'Brooklynn', 'Sara', 'Riley', 'Emery', 'Avery', 'Jessica', 'Ryan', 'Oliver', 'Sarah', 'Liliana', 'Aiden', 'Christian', 'Mackenzie', 'Kimberly', 'Jameson', 'Valentina', 'Chase', 'Amaya', 'Jack']

    let avatar = 'https://api.dicebear.com/9.x/pixel-art/svg'

    const atualizaAvatar = async () => {
        'use server';

        let url = 'https://api.dicebear.com/9.x/pixel-art/svg?seed=' + avatares[Math.floor(Math.random() * (19 - 0 + 1)) + 0];

        avatar = await axios.get(url);

    }
    
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

            <form action={atualizaAvatar} className={styles.form}>
                <button><img src={avatar()} alt="avatar" /></button>
            </form>
        </section>
    );
}   