import styles from "./style.module.scss";

import { FinanceCard } from "./FinanceCard";

export const FinanceList = ({ listCards, removeCard }) => {
  return (
    <section className={styles.container}>
      <h2 className="title3">Resumo financeiro</h2>
      {listCards.length === 0 ? (
        <h3 className={`title2 ${styles.message}`}>
          Você ainda não possui nenhum lançamento
        </h3>
      ) : (
        <ul>
          {listCards.map((card) => {
            const { description, priceValue, typeValue, id } = card;
            return (
              <FinanceCard
                key={id}
                description={description}
                priceValue={priceValue}
                typeValue={typeValue}
                removeCard={removeCard}
                id={id}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};
