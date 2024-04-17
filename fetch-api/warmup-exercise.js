/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

// const response = fetch("https://www.craigslist.org/about/");
// response.then((res) => res.text()).then((data) => console.log(data));

async function fetchData(url) {
  const response = await fetch(url);
  console.log(response.headers.get("Content-Type")); //text/html; charset=utf-8
  const data = await response.text();
  console.log(data);
}
fetchData("https://www.craigslist.org/about/");
