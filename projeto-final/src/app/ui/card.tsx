// Componente card

import Image from "next/image";
import styles from "@/app/styles/card.module.css"


// Criando e definindo o tipo do Card, que sempre terá esse formato
export interface CarrosProps{
    id: string,
    nome: string,
    img: string,
    descricao: string
}

export default function Card(props: CarrosProps){
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
        </div>
    );
}