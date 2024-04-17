/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Have a read through pokeapi.co

    2. Make a request to:
       https://pokeapi.co/api/v2/pokemon/pikachu
       and print out pikachu's "official-artwork"'s URL for
       their image (png). Visit this URL to make sure it works
       using your Browser.
    
    HINT: Be careful with the naming of the keys here when trying
          to access the parsed JSON
*/
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
async function fetchData(url) {
  const response = await fetch(url);
  console.log(response.headers.get("Content-Type")); //application/json; charset=utf-8
  const data = await response.json();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      // const element = data[key];
      console.log(`${key}`);
    }
  }
  console.log(data.sprites.other["official-artwork"]);
}
fetchData(url);
