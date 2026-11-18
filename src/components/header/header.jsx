import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import SearchBar from "../searcbar/searchBar";
import Select from "../select/select";
import styles from "./header.module.css"
import Form from "../form/form";
export default function Header({contact,contacts,setContact,addContact,isvalid}){
    const [isopen,setIsopen]=useState(false)
    
    function openModal(){
        setIsopen(true)
        console.log("hi")
        
    }
    function closeModal(){
        setIsopen(false)
    }
    return(
        <>
        <div className={styles.container}>
            <div>
             <h2>My Contacts</h2>
            <span>{contacts.length} poeple are in your list</span>   
            </div>
            <Button value={"+New Contact"} variant={"primary"} onClick={openModal}/>
        
        </div>
        <div className={styles.searchbox}>
            <SearchBar/>
            <Select/>
        </div>
        <div className={styles.group}>
            <ul className={styles.groupList}>
                <li>all</li>
                <li>work</li>
                <li>friends</li>
                <li>family</li>
            </ul>

        </div>


        <Modal isopen={isopen} closeModal={closeModal} >
            <Form contact={contact} setContact={setContact} addContact={addContact} isvalid={isvalid} />
        </Modal>
        
        </>
    )
}