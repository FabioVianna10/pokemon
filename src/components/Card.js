import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

const Card = ({ pokemon, image }) => {
  return (
    <div className={styles.container}>
      <p className={styles.idPokemon}>{`# ${pokemon.index}`}</p>
      <Image
        className={styles.imgPokemon}
        src={image}
        width="200"
        height="220"
        alt=" imagem de um pokemon"
      ></Image>

      <div className={styles.containerInfo}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Link href={`/pokemon/${pokemon.index}`} className={styles.details}>
          Detalhes
        </Link>
      </div>
    </div>
  );
};

export default Card;
