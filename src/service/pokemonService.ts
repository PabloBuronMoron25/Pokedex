export const fetchPokemons = async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025');
    if(!response.ok){
        throw new Error('han  salido mal los pokemons');
    }
    const data = await response.json();
    return data.results;


}