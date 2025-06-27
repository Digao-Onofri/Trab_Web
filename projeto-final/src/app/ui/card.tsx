// Componente card

import Image from "next/image";
import styles from "@/app/styles/card.module.css"
import Link from "next/link";
import ConexaoBD from "../libs/conexao-bd";
import { redirect } from "next/navigation";

const bd : string = 'carros-db.json';

// Criando e definindo o tipo do Card, que sempre terá esse formato
export interface CarrosProps{
    id: string,
    nome: string,
    img: string,
    descricao: string
}

export default function Card(props: CarrosProps){

    const deleteCarro = async () => {
        'use server';
        const carro = await ConexaoBD.retornaBD(bd);
        const carroToRemove = carro.findIndex((c) => c.id === props.id);
        carro.splice(carroToRemove,1);
        await ConexaoBD.armazenaBD(bd, carro);
        redirect('/main/inicio');
    }

    return(
        <div className={styles.card}>
            <h2>{props.nome}</h2>
            <Image
                src={props.img}
                width={200}
                height={200}
                alt={`Imagem do carro ${props.nome}`}
            />
            <p>{props.descricao}</p>
            <div className={styles.carrosButtonsContainer}>
                <Link href={`/dashboard/edit/${props.id}`} className={styles.btnEdit} >Editar</Link>
                <form action={deleteCarro}>
                    <button className={styles.btnDelete} id="btn-delete">Deletar</button>
                </form>
            </div>
        </div>
    );
}