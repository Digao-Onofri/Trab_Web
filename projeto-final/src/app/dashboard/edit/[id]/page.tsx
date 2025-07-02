// Componente form de edicao de carros
import Menu from "@/app/ui/menu"
import ConexaoBD from "@/app/libs/conexao-bd";
import styles from "@/app/styles/paginas.module.css";
import styles_edit_form from "@/app/styles/formCadCarro.module.css";
import { CarrosProps } from "@/app/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";

// Update do cadastro de um carro específico

const arquivo = 'carros-db.json';

interface EditCarroProps{
    params: Promise<{id: string}>;
}

export default async function editCarro({params}: EditCarroProps) {

    const {id} = await params;
    
    const carroDB = await ConexaoBD.retornaBD(arquivo);
    const carroToEdit : CarrosProps = carroDB.find((c : CarrosProps) => c.id === id);
    const carroToEditIndex : number = carroDB.findIndex((c) => c.id === id);

    const updateCarro = async (formData : FormData) => { 
        'use server';
        const updateCarro : CarrosProps ={
            id, 
            nome: formData.get('nome') as string,
            descricao: formData.get('descricao') as string,
            img: formData.get('img') as string
        }
        carroDB.splice(carroToEditIndex, 1, updateCarro);
        await ConexaoBD.armazenaBD(arquivo, carroDB);
        redirect('/main/inicio');
    }

    return (
        <>
            <div className={styles.menu}>
                <Menu />
            </div>
            <div className={styles.conteudo}>
                <div className={styles_edit_form.div}>
                    <form action={updateCarro} className={styles_edit_form.form}>
                        <h1>{carroToEdit.nome}</h1>                    
                        <Image src={carroToEdit.img}    
                            alt={carroToEdit.nome}
                            width={100}
                            height={100}
                            style={{margin: "0 auto"}}
                        />
                        <input id="nome" name="nome" type="text" placeholder="Nome" defaultValue={carroToEdit.nome}/>
                        <input id="img" name="img" type="text" placeholder="Link da imagem" defaultValue={carroToEdit.img} />
                        <input id="descricao" name="descricao" type="text" placeholder="Descrição" defaultValue={carroToEdit.descricao} />
                        <button type="submit"><a href="/main/inicio">Atualizar</a></button>
                    </form>
                </div>
            </div>
        </>        
    );
}