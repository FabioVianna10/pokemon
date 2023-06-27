import Image from "next/image";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.text}>Sobre o projeto</h1>
        <p className={styles.paragraph}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
        <Image
          src="/assets/charizard.png"
          width="400"
          height="400"
          alt="Foto do pokemon Charizard"
        ></Image>
      </div>
    </>
  );
};

export default about;
