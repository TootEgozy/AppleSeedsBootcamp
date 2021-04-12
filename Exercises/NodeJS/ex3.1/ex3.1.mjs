// What is the difference between import and require?

// import / export are ES6 methods that are used to get spacific bits out of modules.
// require / module.exports are commonJS methods that are used to import 
// or export whole modules.

// How can you enable using the import syntax using node js?
// install esm, a package that allows ES6 methods in node.
// also, you can change the file type to .mjs

// Give 2 node.js environment variables that are not available
// when using the import syntax.
// all process variables, because ES6 is hoisted.

//Create 3 functions using the export/import syntax.
//Import the file system module using the import syntax
import { sum } from './functions.mjs';
console.log(sum(2,3));

import * as fs from 'fs';
console.log(fs);