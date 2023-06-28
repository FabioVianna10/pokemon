export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  const path = data.results.map ((pokemon, index) => {
    return {
        params:{pokemonId:(index +1).toString()},
    }
  })

  return{
    path,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
        props: { pokemom: data},
    }


}

const pokemonId = ( {pokemon}) => {
    return (
        <p>{pokemon.name}</p>>
    );
}

export default pokemonId;