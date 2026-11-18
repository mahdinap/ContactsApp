import styles from "./select.module.css"
export default function Select(){
    return(
        <>
        <select name="" id="" className={styles.container}>
        <option value="atoz">sort to:A to Z</option>
        <option value="Newest">Newest First</option>
        </select>
        </>
    )
}