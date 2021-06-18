import config from "../config";

export async function fetchPokemons({ limit, offset }) {
  try {
    const response = await fetch(
      `${config.POKEMON_API_URL}/?offset=${offset}&limit=${limit}`
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}
