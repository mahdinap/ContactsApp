import Card from "./components/card/card"
import Header from "./components/header/header"
import Modal from "./components/modal/modal"
import Navbar from "./components/navbar/navbar"
import ContactList from "./contactList"

import { useState } from "react"

function App() {
  const [isvalid,setIsvalid]=useState(true)
  const [contact,setContact]=useState({
        firstname:"",
        lastname:"",
        number:"",
        email:"",

    })

    const [contacts,setContacts]=useState([])

    function addContact(){
      
     if(!contact.email || !contact.number || !contact.lastname || !contact.firstname){
            setIsvalid(false)
            return
        }
      setContacts((contacts)=>([...contacts,contact]))
      setContact({
        firstname:"",
        lastname:"",
        number:"",
        email:"",

    })
    console.log(contacts);
    
      
      
      
    }
      
    
    
  return (
   <>
   <Navbar/>
   <main className="mainContainer">
    <Header contact={contact} contacts={contacts} setContact={setContact} addContact={addContact} contacts={contacts} isvalid={isvalid}/>
    <ContactList contacts={contacts}/>
   </main>

   
   
   </>
  )
}

export default App
