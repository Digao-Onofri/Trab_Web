// Componente form de cadastro de carros
import styles from "@/app/styles/formCadCarro.module.css"
import ConexaoBD from "../libs/conexao-bd";
import { CarrosProps } from "./card";
import { redirect } from "next/navigation";

const arquivo = 'carros-db.json';

export default function Login() {

  const AddCarro = async (formData : FormData) => {
    'use server';

    const novoCarro : CarrosProps = {
      id: String(arquivo.length),
      nome : formData.get('nome') as string,
      descricao : formData.get('descricao') as string,
      img : formData.get('img') as string
    }

    console.log(novoCarro);

    const carrosdb = await ConexaoBD.retornaBD(arquivo);
    carrosdb.push(novoCarro);
    await ConexaoBD.armazenaBD(arquivo,carrosdb);
    redirect('main/inicio');
    
  }
  
  return (
    <div className={styles.div}>
      <form action={AddCarro} className={styles.form}>
        <h1>Cadastre um novo carro</h1>
        <input id="nome" name="nome" type="text" placeholder="Nome" />
        <input id="img" name="img" type="text" placeholder="Link da imagem" />
        <input id="descricao" name="descricao" type="text" placeholder="Descrição" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}