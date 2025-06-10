'use client';

import formLogin from "@/app/styles/formLogin.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const irParaCadastro = () => {
    router.push("/main/cadastro/");
  };

  return (
    <div className={formLogin.div}>
      <form action="" className={formLogin.login}>
        <h1>Faça Login</h1>
        <input type="text" placeholder="Nome" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <button type="button" onClick={irParaCadastro}>Cadastrar</button>
      </form>
    </div>
  );
}
