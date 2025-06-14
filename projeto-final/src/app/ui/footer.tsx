import styles from "@/app/styles/footer.module.css"

export default function footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.card}>
                    <h3>Desvende o seu Próximo Sonho</h3>
                    <p>Bem-vindo à nossa garagem virtual! Encontre seu veículo ideal, explore uma vasta seleção de modelos e descubra a paixão sobre quatro rodas que te espera.</p>
                </div>

                <div className={styles.card}>
                    <h3>Anuncie Seu Carro, Destaque Sua Máquina</h3>
                    <p>Compartilhe seu veículo com a nossa comunidade. Crie um anúncio detalhado, adicione fotos impressionantes e alcance potenciais compradores ou admiradores apaixonados.</p>
                </div>

                <div className={styles.card}>
                    <h3>Junte-se à Nossa Confraria Automotiva</h3>
                    <p>Faça parte da nossa rede exclusiva. Tenha acesso a recursos avançados, dicas de manutenção, e conecte-se com entusiastas para trocar experiências e negócios.</p>
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