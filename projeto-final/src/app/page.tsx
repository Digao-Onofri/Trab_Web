// Primeira página chamada que é a de login, chama o componente form login

import Image from "next/image";
import FormLogin from "./(auth)/login/page";

export default function Home() {
  return (
    <FormLogin/>
  );
}
