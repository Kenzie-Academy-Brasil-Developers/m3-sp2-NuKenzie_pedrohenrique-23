import styles from "./style.module.scss";

export const Total = ({ listCards }) => {
  const total = listCards.reduce((prevValue, card) => {
    const value = parseFloat(card.priceValue);
    return card.typeValue === "Entrada" ? prevValue + value : prevValue - value;
  }, 0);

  const formattedTotal = `R$ ${total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return listCards.length > 0 ? (
    <section className={styles.container}>
      <div className={styles.div_total}>
        <h2 className="title3">Valor total:</h2>
        <p className="body">O valor se refere ao seu saldo</p>
      </div>
      <p className={`title3 ${styles.price}`}>{formattedTotal}</p>
    </section>
  ) : null;
};
