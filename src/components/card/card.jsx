import Button from "../button/button";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Card({ contact, onEdit ,onDelete }) {
  const { email, number,firstname,lastname,group} = contact;
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
          <span className={styles.avatar}>M</span>
          <div>
            <span>{firstname} {lastname}</span>
            <p>Group: {group}</p>
          </div>
        </div>

        <FontAwesomeIcon icon={faStar} />
      </div>
      <div>
        <div></div>
        <span>
          <FontAwesomeIcon icon={faPhone} />
          {number}
        </span>
      </div>
      <div>
        <div></div>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
          {email}
        </span>
      </div>
      <div className={styles.btns}>
        <Button value={"Edit"} variant="primary" onClick={clickHandler} />
        <Button value={"Delete"} variant="danger" onClick={deleteHandler}/>
      </div>
    </div>
  );
}
