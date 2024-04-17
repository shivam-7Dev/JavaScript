import { Command, program } from "commander";
// const program = new Command();

// for (const key in program) {
//   console.log(key);
// }

program.option("-n, --name <name>", "Your name").parse(process.argv);
const options = program.opts();

console.log(`Hello, ${options.name}!`);
