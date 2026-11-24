import Button from "../button/button";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faAddressBook} className={styles.icone}  />
          </a>
          <span className={styles.title}>Phonebook</span>
        </div>
      </div>
    </div>
      
    </>
  );
}
