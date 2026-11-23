import Card from "./components/card/card"
import Header from "./components/header/header"
import Modal from "./components/modal/modal"
import Navbar from "./components/navbar/navbar"
import ContactList from "./contactList"

import { useState } from "react"

function App() {
  const [isvalid,setIsvalid]=useState(true)
  const [isEdit, setIsEdit] = useState(false);
const [selectedContact, setSelectedContact] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
  const [contact,setContact]=useState({
        firstname:"",
        lastname:"",
        number:"",
        email:"",

    })
function editContact(contact) {
    setSelectedContact(contact);
    setContact(contact);
    setIsEdit(true);
    setIsModalOpen(true);
}
    const [contacts,setContacts]=useState([])

    function addContact(){
     
     if(!contact.email || !contact.number || !contact.lastname || !contact.firstname){
            setIsvalid(false)
            return
        }
         const newContact = {
        ...contact,
        id: crypto.randomUUID()
    };

    
      setContacts((contacts)=>([...contacts,contact]))
      setContact({
        firstname:"",
        lastname:"",
        number:"",
        email:"",

    })
    console.log(contacts);
    
      
      
      
    }
    function updateContact(updatedContact) {
    setContacts((contacts) =>
        contacts.map((item) =>
            item.id === updatedContact.id
                ? updatedContact
                : item
        )
    );
}
    
    
  return (
   <>
   <Navbar/>
   <main className="mainContainer">
    <Header contact={contact} contacts={contacts} setContact={setContact} addContact={addContact} contacts={contacts} isvalid={isvalid}  isEdit={isEdit} isopen={isModalOpen}
    setIsopen={setIsModalOpen}
    setIsEdit={setIsEdit} updateContact={updateContact}/>
    <ContactList contacts={contacts} onEdit={editContact}/>
   </main>

   
   
   </>
  )
}

export default App
