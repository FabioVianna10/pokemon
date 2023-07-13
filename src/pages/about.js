import Image from "next/image";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.text}>Sobre o projeto</h1>
        <p className={styles.paragraph}>
          Este projeto foi desenvolvido com objetivo de colocar em pratica
          alguns conceitos de desenvolvimento como componentização,
          componentização por rotas, consumo de Apis, estilização em módulos.
        </p>
        <h3>Tecnologias Utilizadas</h3>
        <ul>
          <li>NextjS</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Module CSS</li>
        </ul>
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
