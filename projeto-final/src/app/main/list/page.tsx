import Menu from "@/app/ui/menu"
import styles from "@/app/styles/paginas.module.css"
import stylesList from "@/app/styles/list.module.css"
import CarrosPadrao from "@/db/carros-db.json"
import Card from "@/app/ui/card"

export default function List(){
    return(
        <>
        <div className={styles.menu}>
            <Menu />
        </div>

        <div className={styles.conteudo}>
            <div className={stylesList.destaques}>
                <div className={stylesList.conteudoList}>
                    <h3 className={stylesList.h3}>Todos os seus carros</h3>
                    <div className={stylesList.card}>
                        {CarrosPadrao.map(carro => (
                            <Card 
                                key={carro.id}
                                id={carro.id}
                                nome={carro.nome}
                                img={carro.img}
                                descricao={carro.descricao}
                            />
                        ))}
                    </div>
                </div>      
            </div>
        </div>

        </>
    );
}