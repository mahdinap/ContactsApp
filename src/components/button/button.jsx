import styles from "./button.module.css"
export default function Button(prop){
    const {value,onClick,variant="danger"}=prop
    return(
        <>
        <button onClick={onClick} className={`${styles[variant]}`}>{value}</button>
        </>
    )
}