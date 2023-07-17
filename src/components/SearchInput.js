import styles from "../styles/SearchInput.module.css";
import Image from "next/image";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

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
        value={search}
        className={styles.search}
        placeholder="Escolha seu Pokemon!"
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default SearchInput;
