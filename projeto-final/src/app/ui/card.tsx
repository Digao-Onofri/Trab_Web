// Componente card

import Image from "next/image";
import styles from "@/app/styles/card.module.css"
import Link from "next/link";


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
                <Link href={`/dashboard/edit ${props.id}`} id="btn-edit">Editar</Link>
                <form action={deleteCarro}>
                    <button id="btn-delete">Deletar</button>
                </form>
            </div>
        </div>
    );
}