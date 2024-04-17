import { topMovies } from "./moduleB.js";

const checkMovie = function (movieName) {
  if (topMovies.includes(movieName)) {
    return true;
  } else {
    return false;
  }
};

export { checkMovie };
