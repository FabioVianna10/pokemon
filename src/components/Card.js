import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

/*export const getPokemonInfo = async ({pokemons}) => {
    const res = await fetch(`https://pokeapi.glitch.me/vi/pokemon/${pokemons}`) 
    return res.json()
    console.log(res)
} */

const Card = ({ pokemon, imagem, id }) => {
  return (
    <div className={styles.container}>
      <p className={styles.idPokemon}>{id}</p>
      <Image
        className={styles.imgPokemon}
        src={imagem}
        width="200"
        height="220"
        alt=" imagem de um pokemon"
      ></Image>

      <div className={styles.containerInfo}>
        <h1 className={styles.title}>{pokemon}</h1>
        <Link href="/about" className={styles.details}>
          Detalhes
        </Link>
      </div>
    </div>
  );
};

export default Card;
