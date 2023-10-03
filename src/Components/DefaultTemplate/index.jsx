import { Header } from "../Header"
import styles from "./style.module.scss";

export const DefaultTemplate = ({ children }) => {
    return(
        <>
        <Header/>
            <main className={styles.container}>
            {children}
            </main>
        </>
    )
}