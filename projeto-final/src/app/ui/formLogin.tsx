import styles from "@/app/styles/formLogin.module.css";

export default function Login() {

  return (
    <div className={styles.div}>
      <form action="" className={styles.login}>
        <h1>Faça Login</h1>
        <input type="text" placeholder="Nome" />
        <input type="password" placeholder="Senha" />
        <button type="submit"><a href="/main/inicio">Entrar</a></button>
        <button type="button"><a href="/main/cadastro">Cadastrar</a></button>
      </form>
    </div>
  );
}
