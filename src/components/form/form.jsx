
import Button from "../button/button";
import Input from "../input/input";
import styles from "./form.module.css"
import { useState } from "react";
export default function Form({contact,setContact,addContact,isvalid}){
    
    
    

    
    function changeHandler(e){
        const name=e.target.name
        const value=e.target.value
        setContact((contact)=>({...contact,[name]:value}))
        
        
    }
   

    return(
        <div className={styles.container}>
        
        <h2 className={styles.title}>New contact</h2>
        <div className={styles.nameField}>
        <Input id={"firstname"} type="text" name="firstname" placeholder="Joe" onChange={changeHandler} />
        <Input type="text" name="lastname" placeholder="cole" onChange={changeHandler}/> 
        </div>
        
        <Input type="number"  name="number" placeholder="enter number" value={contact.number} onChange={changeHandler}/>
        <Input type="email"  name="email" placeholder="enter email" value={contact.email} onChange={changeHandler} />
        <div className={styles.group}>
        <label htmlFor="group">select group : </label>
        <select name="group" id="group">
            <option value="all">all</option>
            <option value="family">family</option>
            <option value="friend">friends</option>
            <option value="work">work</option>
        </select> 
        </div>
        
        {!isvalid ? <h1 className={styles.error}>enter valid values</h1>:null}
        
        <Button value="Add Contact" onClick={addContact}/>
        
        </div>
    )
}