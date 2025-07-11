'use client'
import styles from "@/app/styles/menu.module.css"
import { deleteSessionCookie } from "../libs/session"
import { redirect } from "next/navigation";
import { useState, useEffect } from 'react'; 
import axios from "axios";

export default function Menu(){ 

    const avatares = ['Katherine', 'Brooklynn', 'Sara', 'Riley', 'Emery', 'Avery', 'Jessica', 'Ryan', 'Oliver', 'Sarah', 'Liliana', 'Aiden', 'Christian', 'Mackenzie', 'Kimberly', 'Jameson', 'Valentina', 'Chase', 'Amaya', 'Jack'];

    const url = 'https://api.dicebear.com/9.x/pixel-art/svg?seed=';

    const [avatarSrc, setAvatarSrc] = useState('');

    const atualizaAvatar = async () => {
        try {
            const randomSeed = avatares[Math.floor(Math.random() * avatares.length)];
            const { data: svgText } = await axios.get(`${url}${randomSeed}`);
            
            const dataUri = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgText)))}`;
            
            setAvatarSrc(dataUri);
        } catch (error) {
            setAvatarSrc('https://api.dicebear.com/9.x/pixel-art/svg');
        }
    }
    
    useEffect(() => {
        atualizaAvatar();
    }, []);

    const logout = async () => {
        await deleteSessionCookie();
        redirect('/login');
    }

    return(
        <section className={styles.section}>
            <button><a href="/main/inicio">Início</a></button>
            <button><a href="/dashboard/creater">Adicionar</a></button>
            <button><a href="/main/list/">Listar</a></button>
            <form action={logout} className={styles.form}>
                <button>Sair</button>
            </form>
            
            <section className={styles.avatarContainer}>
                <button onClick={atualizaAvatar}>
                    {avatarSrc && <img src={avatarSrc} alt="Avatar" width={100} height={100} />}
                </button>
            </section>
        </section>
    );
}