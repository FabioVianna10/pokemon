import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Image from "next/image";


/*--------------------------------------------------------------------------------*/
export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  console.log(data);

  const dataPokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    index: index + 1,
  }));
  return {
    props: { dataPokemons },
  };
};

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

const Home = ({ dataPokemons }) => {
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
        {dataPokemons.map((pokemons) => {
          return <Card key={pokemons.id}>name={pokemons.name}</Card>;
        })}
      </div>
    </>
  );
};

export default Home;
