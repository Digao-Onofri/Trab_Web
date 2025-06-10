import styles from "@/app/styles/footer.module.css"

export default function footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.card}>
                    <h3>Descubra o AutoHub</h3>
                    <p>Bem-vindo ao lugar onde os apaixonados por carros se encontram. No AutoHub, você encontra informações, dicas e curiosidades sobre os veículos mais incríveis do mercado.</p>
                </div>

                <div className={styles.card}>
                    <h3>Personalize sua experiência</h3>
                    <p>Siga os modelos e marcas que você mais curte e receba atualizações diretamente na sua área personalizada. Explore agora.</p>
                </div>

                <div className={styles.card}>
                    <h3>Seja um membro premium</h3>
                    <p>Tenha acesso exclusivo a análises completas, comparativos, avaliações e novidades do mundo automotivo. A partir de R$5/mês. Assine já.</p>
                </div>
            </div>

        <div className={styles.creditos}>
            <p>Feita por: </p>
            <ul>
                <li><a href="https://github.com/IvanSilverio" target="_blank">Ivan</a></li>
                <li><a href="https://github.com/pedrolmf33" target="_blank">Pedro Luiz</a></li>
                <li><a href="https://github.com/Digao-Onofri" target="_blank">Rodrigo</a></li>
            </ul>
        </div>
        </footer>
    );
}