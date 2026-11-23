import Button from "../button/button";
import styles from "./confirmModal.module.css";

export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h3>Confirm Changes</h3>
        <p>Are you sure you want to save these changes?</p>

        <Button value="Cancel" onClick={onCancel} />
        <Button value="Confirm" onClick={onConfirm} />
      </div>
    </div>
  );
}