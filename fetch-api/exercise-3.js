/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
    2. Import "fs" from "fs/promises" which is built-in to NodeJS
       (Doesn't need an NPM install)

    3. Go to "wallhaven.cc" and find a wallpaper you like. Visit the
       wallpaper's page and right click the wallpaper and "open image
       in new tab" to you have just the image in a tab. The URL should
       end with .png or .jpg.
       Eg: https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png
    4. Use fetch to get this image, and parse it correctly. Then,
       use "fs" to write a file to your filesystem with the actual
       image itself so you can open it after you run the script.
       Note that these functions in fs return Promises.

    * This is purposefully challenging and will require lots of
      Googling to see how to parse the image and save it using Node.
*/
import fs from "fs/promises";

const url = "https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png";

async function fetchData(url) {
  const response = await fetch(url);
  console.log(response.headers.get("Content-Type")); //image/png

  //   const imageBlob = await response.arrayBuffer();
  const imageBlob = await response.blob();
  console.log(imageBlob); //Blob { size: 2631231, type: 'image/png' }

  // fs.writeFile("image.png", imageBlob);
  //TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer,
  //TypedArray, or DataView. Received an instance of Blob

  //creating instance of ArrayBuffer from Blob. but this wont work also
  const arrayBuffer = await imageBlob.arrayBuffer(); // Read as arrayBuffer for efficient conversion
  //   console.log(arrayBuffer);
  //   fs.writeFile("image.png", arrayBuffer);
  //TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer,
  //TypedArray, or DataView. Received an instance of ArrayBuffer

  const bufferData = Buffer.from(arrayBuffer);
  //Buffer.from() type of string or Buffer or arraybuffer and not a blob
  //   console.log(bufferData);
  fs.writeFile("./image.png", bufferData);
  console.log("data saved successfully! 🚀");

  // covert to blob=> covert to arrayBuufer => convert to Buffer
}

fetchData(url);
