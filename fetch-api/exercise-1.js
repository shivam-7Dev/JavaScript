/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Make a request to:
       https://jsonplaceholder.typicode.com/posts/1
       and print out the resulting JSON using Fetch
    
    BONUS: How does this differ from text content and what might
           fetch be doing with the JSON response for us?
*/
const url = "https://jsonplaceholder.typicode.com/posts/1";
const response = fetch(url);
response
  .then((res) => {
    console.log(res.headers.get("Content-Type")); //application/json; charset=utf-8
    return res.json();
  })
  .then((data) => console.log(data));
