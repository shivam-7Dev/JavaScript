import chalk, { Chalk } from "chalk";

console.log(chalk.blue("Hello") + "world" + chalk.red("!"));
console.log(chalk.blue.bgCyan.bold("Hello"));
