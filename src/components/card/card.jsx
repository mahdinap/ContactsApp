import Button from "../button/button";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Card({ contact, onEdit }) {
  const { email, number,firstname,lastname} = contact;


  function clickHandler() {
    onEdit(contact);
  }

  return (
    <div className={styles.container}>
      <div className={styles.idField}>
        <div className={styles.nameField}>
          <span className={styles.avatar}>M</span>
          <div>
            <span>{firstname} {lastname}</span>
            <p>Work</p>
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
        <Button value={"Delete"} variant="danger" />
      </div>
    </div>
  );
}
