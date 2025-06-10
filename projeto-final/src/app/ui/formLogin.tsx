import formLogin from "@/app/styles/formLogin.module.css";

export default function Login() {

  return (
    <div className={formLogin.div}>
      <form action="" className={formLogin.login}>
        <h1>Faça Login</h1>
        <input type="text" placeholder="Nome" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <button type="button">Cadastrar</button>
      </form>
    </div>
  );
}
