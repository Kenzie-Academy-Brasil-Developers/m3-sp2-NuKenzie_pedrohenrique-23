import styles from "./style.module.scss";

export const FinanceCard = ({description, priceValue, typeValue, id, removeCard}) => {
    const cardClassName = typeValue === "Entrada" ? styles.card_entrance : styles.card_exit;
    
    return(
        <>
        <section className={`${styles.container} ${cardClassName}`}>
            <div className={styles.div_left}>
                <h2 className="title3">{description}</h2>
                <p className="body">{typeValue}</p>
            </div>
            <div className={styles.div_right}>
                <p className="body">R$ {priceValue}</p>
                <button className="btn-2" onClick={() => removeCard(id)}>Excluir</button>
            </div>
        </section>
        
        </>
    )
}