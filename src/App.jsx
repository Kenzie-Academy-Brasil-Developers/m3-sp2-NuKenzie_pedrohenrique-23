import { useState } from "react";
import { DefaultTemplate } from "./Components/DefaultTemplate"
import { FinanceForm } from "./Components/FinanceForm"
import { FinanceList } from "./Components/FinanceList"
import "./Styles/index.scss"
import { Total } from "./Components/Total";
function App() {

  const [listCards, setListCards] = useState([]);

  const addCard = (description, priceValue, typeValue) => {
      const id = crypto.randomUUID();
      const newCard = {description, priceValue, typeValue, id};
      setListCards([...listCards, newCard])
  }

  const removeCard = (id) => {
    const listFiltered = listCards.filter((card) => {
      if(card.id !== id){
        return card;
      }
    })

    setListCards(listFiltered);
  }

  const total = listCards.reduce((prevValue, card) => {
    return prevValue + card.priceValue;
  }, 0);

  return ( 
    <>
      <DefaultTemplate>
        <div>
          <FinanceForm addCard={addCard}/>
          <Total listCards={listCards}/>
        </div>
        <FinanceList listCards={listCards} removeCard={removeCard}/>
      </DefaultTemplate>
      
    </>
  )
}

export default App
