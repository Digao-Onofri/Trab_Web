import styles from "@/app/styles/conteudoInicio.module.css"
// import Card from "@/app/ui/card"
import CarrosPadrao from "@/db/carrosPadrao-db.json"

export default function ConteudoInicio(){
    return(
        <div className={styles.divPrincipal}>
            <h1>Sua Garagem Digital Definitiva</h1>

            <div className={styles.divSecundaria}>
                <h2>Milhares de carros esperando por você, de clássicos a superesportivos.</h2>
                <h3>Encontre o Carro dos Seus Sonhos ou Anuncie o Seu com Facilidade</h3>
            </div>

            <div className={styles.buttons}>
                <button>Explorar Carros</button>
                <button>Anunciar meu Carro</button>
            </div>

            <div className={styles.destaques}>

                <h2>Carros em Destaque</h2>

                {/* <div className={styles.card}>
                    {CarrosPadrao.map(carro => (
                        <Card 
                            key={carro.id}
                            id={carro.id}
                            nome={carro.nome}
                            img={carro.img}
                            descricao={carro.descricao}
                        />
                    ))}
                </div> */}

            </div>
        </div>
    );
}