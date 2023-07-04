import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const getStaticProps = async () => {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  const dataPokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    index: index + 1,
  }));

  let pokemonImageUrls = {};

  try {
    const fetchPokemonImages = dataPokemons.map(async (pokemon) => {
      const pokemonResponse = await fetch(`${api}/${pokemon.index}`);
      const pokemonData = await pokemonResponse.json();
      const pokemonImageUrl = pokemonData.sprites.front_default;
      pokemonImageUrls[pokemon.index] = pokemonImageUrl;
    });

    await Promise.all(fetchPokemonImages);
  } catch (error) {
    console.log("Erro ao obter as URLs das imagens dos Pokémon:", error);
  }

  return {
    props: {
      dataPokemons,
      pokemonImageUrls,
    },
  };
};

const Home = ({ dataPokemons, pokemonImageUrls }) => {
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
        {dataPokemons.map((pokemon) => (
          <Card
            key={pokemon.index}
            imagem={pokemonImageUrls[pokemon.index]}
            pokemon={pokemon.name}
            id={`# ${pokemon.index}`}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
