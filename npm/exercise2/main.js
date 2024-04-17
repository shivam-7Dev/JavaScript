const fs = require("fs-extra"); //commonJS
console.log(fs);
for (const key in fs) {
  console.log(key);
}

fs.outputFileSync(
  "hello.txt",
  "this text is being written from the file main.js into hello.txt"
);
