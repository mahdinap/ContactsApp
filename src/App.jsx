import Card from "./components/card/card"
import Header from "./components/header/header"
import Modal from "./components/modal/modal"
import Navbar from "./components/navbar/navbar"
import ContactList from "./contactList"

import { useState } from "react"
import ConfirmModal from "./components/confirmModal/confirmModal";
function App() {
  const [isvalid,setIsvalid]=useState(true)
  const [isEdit, setIsEdit] = useState(false);
const [selectedContact, setSelectedContact] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
const [contactToDelete, setContactToDelete] = useState(null);
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

    console.log("New Contact:", newContact);
      setContacts((contacts)=>([...contacts,newContact]))
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
    function deleteContact(id) {
  setContacts((contacts) =>
    contacts.filter((item) => item.id !== id)
  );
}
function requestDelete(id) {
  setContactToDelete(id);
  setIsDeleteConfirmOpen(true);
}
    
  return (
   <>
   <Navbar/>
   <main className="mainContainer">
    <Header contact={contact} contacts={contacts} setContact={setContact} addContact={addContact}  isvalid={isvalid}  isEdit={isEdit} isopen={isModalOpen}
    setIsopen={setIsModalOpen}
    setIsEdit={setIsEdit} updateContact={updateContact}/>
    <ContactList contacts={contacts} onEdit={editContact} onDelete={requestDelete}/>
   </main>
{isDeleteConfirmOpen && (
  <ConfirmModal
    onCancel={() => {
      setIsDeleteConfirmOpen(false);
      setContactToDelete(null);
    }}
    onConfirm={() => {
      deleteContact(contactToDelete);
      setIsDeleteConfirmOpen(false);
      setContactToDelete(null);
    }}
  />
)}
   
   
   </>
  )
}

export default App
