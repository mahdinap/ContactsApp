import Button from "../button/button";
import styles from "./confirmModal.module.css";

export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h3>confirm </h3>
        <p>Are you sure?</p>

        <Button value="Cancel" onClick={onCancel} />
        <Button value="Confirm" onClick={onConfirm} />
      </div>
    </div>
  );
}