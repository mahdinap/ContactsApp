import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import SearchBar from "../searcbar/searchBar";
import Select from "../select/select";
import styles from "./header.module.css";
import Form from "../form/form";
import ConfirmModal from "../confirmModal/confirmModal";
export default function Header({
  contact,
  contacts,
  setContact,
  addContact,
  isvalid,
  isEdit,
  setIsEdit,
  isopen,
  setIsopen,
  updateContact,
  selectedGroup,
  setSelectedGroup,
  searchTerm,
setSearchTerm,
}) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  function openModal() {
    setIsopen(true);
    console.log("hi");
  }
  function closeModal() {
    setIsopen(false);
    setIsEdit(false);
    setContact({
      firstname: "",
      lastname: "",
      number: "",
      email: "",
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>My Contacts</h2>
          <span>{contacts.length} poeple are in your list</span>
        </div>
        <Button
          value={"+New Contact"}
          variant={"primary"}
          onClick={openModal}
        />
      </div>
      <div className={styles.searchbox}>
        <SearchBar searchTerm={searchTerm}
setSearchTerm={setSearchTerm} />
        <Select />
      </div>
      <div className={styles.group}>
        <ul className={styles.groupList}>
          <li
            key={"all"}
            className={selectedGroup === "all" ? styles.active : ""}
            onClick={() => setSelectedGroup("all")}
          >
            all
          </li>
          <li
            className={selectedGroup === "work" ? styles.active : ""}
            onClick={() => setSelectedGroup("work")}
          >
            work
          </li>
          <li
            className={selectedGroup === "friends" ? styles.active : ""}
            onClick={() => setSelectedGroup("friends")}
          >
            friends
          </li>
          <li
            className={selectedGroup === "family" ? styles.active : ""}
            onClick={() => setSelectedGroup("family")}
          >
            family
          </li>
          <li
            className={selectedGroup === "favorites" ? styles.active : ""}
            onClick={() => setSelectedGroup("favorites")}
          >
            Favorites
          </li>
        </ul>
      </div>

      <Modal isopen={isopen} closeModal={closeModal}>
        <Form
          contact={contact}
          setContact={setContact}
          addContact={addContact}
          isvalid={isvalid}
          isEdit={isEdit}
          updateContact={updateContact}
          closeModal={closeModal}
          onRequestConfirm={() => setIsConfirmOpen(true)}
        />
      </Modal>
      {isConfirmOpen && (
        <ConfirmModal
          onCancel={() => setIsConfirmOpen(false)}
          onConfirm={() => {
            updateContact(contact);
            setIsConfirmOpen(false);
            closeModal();
          }}
        />
      )}
    </>
  );
}
