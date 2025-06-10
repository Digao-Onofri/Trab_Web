import form from "@/app/styles/formCadastro.module.css"

export default function Cadastro(){
    return(
        <div className={form.div}>
            <form action="" className={form.cadastro}>
                <h1>Cadastro</h1>
                <input type="text" placeholder="Nome"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmar Senha"/>
                <button>Cadastrar</button>
            </form>
        </div>
    );
}