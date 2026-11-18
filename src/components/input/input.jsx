import styles from "./input.module.css"
export default function Input(props){
    const {type,id,placeholder,name,value,onChange}=props
    return(
        <div className={styles.container}>
        <label htmlFor={id}>{name}</label>
        <input type={type}  id={id} placeholder={placeholder}  name={name} value={value} onChange={onChange} />
        </div>
    )
}