import styles from "./modal.module.css"
export default function Modal(props){
    const {isopen,children,closeModal}=props
    
    if(!isopen) return null

    return(
        <>
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={closeModal} className={styles.closebtn}>X Close</button>
                {children}

            </div>

        </div>
        </>
    )
}