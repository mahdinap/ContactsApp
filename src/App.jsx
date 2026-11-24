import Card from "./components/card/card";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import Navbar from "./components/navbar/navbar";
import ContactList from "./contactList";

import { useState } from "react";
import ConfirmModal from "./components/confirmModal/confirmModal";
function App() {
  const [isvalid, setIsvalid] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    group: "family",
  });

const [searchTerm, setSearchTerm] = useState("");

  function editContact(contact) {
    setSelectedContact(contact);
    setContact(contact);
    setIsEdit(true);
    setIsModalOpen(true);
  }
  const [contacts, setContacts] = useState([]);

  function addContact() {
    if (
      !contact.email ||
      !contact.number ||
      !contact.lastname ||
      !contact.firstname
    ) {
      setIsvalid(false);
      return;
    }
    const newContact = {
      ...contact,
      id: crypto.randomUUID(),
      isFavorite: false
    };

    console.log("New Contact:", newContact);
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      group: "family",
    });
    console.log(contacts);
  }
  function updateContact(updatedContact) {
    setContacts((contacts) =>
      contacts.map((item) =>
        item.id === updatedContact.id ? updatedContact : item,
      ),
    );
  }
  function deleteContact(id) {
    setContacts((contacts) => contacts.filter((item) => item.id !== id));
  }
  function requestDelete(id) {
    setContactToDelete(id);
    setIsDeleteConfirmOpen(true);
  }


  function toggleFavorite(id) {
  setContacts((contacts) =>
    contacts.map((item) =>
      item.id === id
        ? { ...item, isFavorite: !item.isFavorite }
        : item
    )
  );
}
const filteredContacts = contacts.filter((item) => {
  if (searchTerm.trim() !== "") {
    const search = searchTerm.toLowerCase();

    return (
      item.firstname.toLowerCase().includes(search) ||
      item.lastname.toLowerCase().includes(search) ||
      item.number.includes(search) ||
      item.email.toLowerCase().includes(search)
    );
  }

  if (selectedGroup === "all") return true;

  if (selectedGroup === "favorites") {
    return item.isFavorite;
  }

  return item.group === selectedGroup;
});

  return (
    <>
      <Navbar />
      <main className="mainContainer">
        <Header
          contact={contact}
          contacts={contacts}
          setContact={setContact}
          addContact={addContact}
          isvalid={isvalid}
          isEdit={isEdit}
          isopen={isModalOpen}
          setIsopen={setIsModalOpen}
          setIsEdit={setIsEdit}
          updateContact={updateContact}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          searchTerm={searchTerm}
setSearchTerm={setSearchTerm}
        />
        <ContactList
          contacts={filteredContacts}
          onEdit={editContact}
          onDelete={requestDelete}
          onToggleFavorite={toggleFavorite}
        />
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
  );
}

export default App;
