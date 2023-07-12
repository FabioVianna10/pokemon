import styles from "../styles/SearchInput.module.css";
import Image from "next/image";
const SearchInput = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="/assets/lupa.png"
        width="20"
        height="20"
        alt="Icone de uma lupa"
      />
      <input
        className={styles.search}
        placeholder="Escolha seu Pokemon!"
      ></input>
    </div>
  );
};

export default SearchInput;
