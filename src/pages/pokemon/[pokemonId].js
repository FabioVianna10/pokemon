import React from "react";
import Image from "next/image";
import styles from "../../styles/PokemonId.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/${id}`);
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  const imageUrl = pokemon.sprites?.front_default;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={imageUrl}
        width="200"
        height="220"
        alt={`imagem do pokemon ${pokemon.name}`}
      />
      <div className={styles.DescriptionContainer}>
        <h3 className={styles.subtitle}>Numero:</h3>
        <p>{`# ${pokemon.id}`}</p>

        <div className={styles.typeContainer}>
          <h3 className={styles.subtitle}>Tipo:</h3>
          <div className={styles.spanContainer}>
            {pokemon.types.map((item, index) => (
              <span key={index}>{item.type.name}</span>
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Altura:</h3>
          <p>{`${pokemon.height * 10}`}cm</p>
          <h3 className={styles.subtitle}>Peso:</h3>
          <p>{`${pokemon.weight / 10}`}kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
