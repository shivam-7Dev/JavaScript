import { b } from "./moduleB.js";
console.log("Main");

/**
 * ouput
 
    Module A
    Module B
    MAIN

 *JavaScript engines prioritize loading and executing modules that are directly imported.
 *Once a module's code is executed, its variables are available for further imports only if they're explicitly exported.
 *The import statement itself doesn't cause the imported module's code to re-run.
 *It only retrieves the pre-defined values of exported variables.
    
 */
