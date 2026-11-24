import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./searchBar.module.css";
export default function SearchBar(prop) {
  const { searchTerm,
setSearchTerm, } = prop;
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
      <input
        type="text"
        placeholder="search..."
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        value={searchTerm}
        className={styles.input}
      />
    </div>
  );
}
