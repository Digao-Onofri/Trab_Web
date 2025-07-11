// Componente menu
'use client'
import styles from "@/app/styles/menu.module.css"
import { deleteSessionCookie } from "../libs/session"
import { redirect } from "next/navigation";
import { useState } from 'react';
import axios from "axios";
import AvatarProp, { isAvatarProp }  from "./avatar";

export default function menu(){

    const avatares = ['Katherine', 'Brooklynn', 'Sara', 'Riley', 'Emery', 'Avery', 'Jessica', 'Ryan', 'Oliver', 'Sarah', 'Liliana', 'Aiden', 'Christian', 'Mackenzie', 'Kimberly', 'Jameson', 'Valentina', 'Chase', 'Amaya', 'Jack'];

    const url = 'https://api.dicebear.com/9.x/pixel-art/svg'

    const [canDisplay, setCanDisplay] = useState(false);
    const [avatar, setAvatar] = useState(<AvatarProp image=''/>)

    const atualizaAvatar = async () => {

        let newAvatar = isAvatarProp;
        try{
            const {data} = await axios.get(`${url}?seed='${avatares[Math.floor(Math.random() * (19 - 0 + 1)) + 0]}`);
            newAvatar = {
                image: data
            }
        }catch{
            newAvatar = {
                image : 'https://api.dicebear.com/9.x/pixel-art/svg'
            }
        }
        setAvatar(<AvatarProp {...newAvatar}/>);
        setCanDisplay(true);
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
            {canDisplay && avatar}
        </section>
    );
}   