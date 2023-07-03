import styles from "../styles/Home.module.css"
import Image from "next/image";

/*--------------------------------------------------------------------------------*/

/*export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  const pokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    index: index + 1,
  }));

  return {
    props: { pokemons },
  };
}*/

const Home = ({ pokemons }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Poke<span></span>Next
        </h1>
        <Image
          src="/assets/pokeball.png"
          width="50"
          height="50"
          alt="Imagem de uma Pokebola"
        />
        </div>

        <div className={styles.pokemonContainer}>
          <p>testando</p>
        </div>
      
    </>
  );
};

export default Home;
