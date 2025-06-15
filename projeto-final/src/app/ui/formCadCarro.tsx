// Componente form de cadastro de carros
import styles from "@/app/styles/formCadCarro.module.css"

export default function Login() {

  return (
    <div className={styles.div}>
      <form action="" className={styles.form}>
        <h1>Cadastre um novo carro</h1>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Link da imagem" />
        <input type="text" placeholder="Descrição" />
        <button type="submit"><a href="/main/inicio">Cadastrar</a></button>
      </form>
    </div>
  );
}