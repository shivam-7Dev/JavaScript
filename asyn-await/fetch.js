function getData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);
}

const data = getData();
data.then((json) => console.log(json));

async function getData2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}
//asyn function always returns a promise object

const data2 = getData();
data2.then((json) => console.log(json));
