import Button from "../button/button";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Card({ contact, onEdit, onDelete, onToggleFavorite }) {
  const { email, number, firstname, lastname, group } = contact;
  console.log("Card Contact:", contact);

  function clickHandler() {
    onEdit(contact);
  }
  function deleteHandler() {
    console.log("Contact ID:", contact.id);
    onDelete(contact.id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.idField}>
        <div className={styles.nameField}>
          <span className={styles.avatar}>{firstname[0]}</span>
          <div>
            <span>
              {firstname} {lastname}
            </span>
            <p className={styles.group}>Group: {group}</p>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faStar}
          onClick={() => onToggleFavorite(contact.id)}
          className={
            contact.isFavorite ? styles.favoriteActive : styles.favorite
          }
        />
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faPhone} className={styles.phone} />
          {number}
        </span>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faEnvelope} className={styles.letter}/>
           {email}
        </span>
      </div>
      <div className={styles.btns}>
        <Button value={"Edit"} variant="primary" onClick={clickHandler} />
        <Button value={"Delete"} variant="danger" onClick={deleteHandler} />
      </div>
    </div>
  );
}
