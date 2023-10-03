import { useState } from "react";
import styles from "./style.module.scss";

export const FinanceForm = ({addCard}) => {

    const [description , setDescription] = useState("");
    const [priceValue , setPriceValue] = useState("");
    const [typeValue , setTypeValue] = useState("Entrada");
  
    

    const submit = (e) => {
        e.preventDefault();
      
        const hasEmptyFields = !description || !priceValue || !typeValue;
      
        hasEmptyFields
          ? alert("Por favor, preencha todos os campos!!")
          : (
              addCard(description, priceValue, typeValue),
      
              
              setDescription(""),
              setPriceValue("")
            );
      };



    return(
        <section className={styles.container}>
            <form onSubmit={submit}>
                <div className={styles.div_inputs}>
                    <label className="title3">Descrição</label>
                    <input className="headline" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="title4">Ex: Compra de Roupas</p>
                </div>
                <div className={styles.div_inputs}>
                    <label className="title3">Valor (R$)</label>
                    <input className="headline" placeholder="1" onChange={(e) => setPriceValue(e.target.value)} value={priceValue}type="number" step="any"/>
                    <label className="title3">Tipo de valor</label>
                    <select className="headline" type="select" name="value" value={typeValue} onChange={(e) => setTypeValue(e.target.value)}>
                        <option value="Entrada"name="entrance">Entrada</option>
                        <option value="Saída" name="exit">Saída</option>
                   </select>
                </div>
                <button className="btn" type="submit">Inserir valor</button>
            </form>
        </section>
    )
}