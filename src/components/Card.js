import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";


/*export const getPokemonInfo = async ({pokemons}) => {
    const res = await fetch(`https://pokeapi.glitch.me/vi/pokemon/${pokemons}`) 
    return res.json()
    console.log(res)
} */

const Card = () => {
  return (
    <div className={styles.container}>
      <p className={styles.idPokemon}>#50</p>
      <Image
        className={styles.imgPokemon}
        src="/assets/charizard.png"
        width="180"
        height="200"
        alt="Lo imagem de uma pokebola"
      ></Image>

      <div className={styles.containerInfo}>
        <h1 className={styles.title}>{}</h1>
        <Link href="/about" className={styles.details}>
         Detalhes
        </Link>
        
      </div>
    </div>
  );
};

export default Card;
