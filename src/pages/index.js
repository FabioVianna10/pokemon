import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

export const getStaticProps = async () => {
  const maxPokemons = 300;
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
  const [filterPokemons, setFilterPokemons] = useState("");

  const handleSearch = (e) => {
    setFilterPokemons(e.target.value);
  };
  const searchLowercase = filterPokemons.toLowerCase();
  const allPokemons = dataPokemons;

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchLowercase)
  );
  console.log(filteredPokemons);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <Image
            className={styles.img}
            src="/assets/lupa.png"
            width="20"
            height="20"
            alt="Icone de uma lupa"
          />
          <input
            value={filterPokemons}
            className={styles.search}
            onChange={handleSearch}
            placeholder="Escolha seu Pokemon!"
          />
        </div>
      </div>

      <div className={styles.pokemonContainer}>
        {filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.index}
            imagem={pokemonImageUrls[pokemon.index]}
            pokemon={pokemon}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
