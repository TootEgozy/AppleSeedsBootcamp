// 1. Create a new txt file using the same fs module method we have
// learned before.
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// 3. Rename one of the files using a method from the fs module.
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
// 5. Find out and implement another method for the fs module.

const fs = require('fs');

//fs.writeFileSync('notes.txt', 'Hello World!');
//fs.copyFile("notes.txt", "copied_file.txt", err=> console.log(err));
//fs.rename("copied_file.txt", "NewName.txt", err=> console.log(err));
const dir = 'C:/Dropbox/TootEgozy/AppleSeeds/Exercises/NodeJS/ex2.1';
fs.readdirSync(dir).forEach(file => {
    console.log(file);
  });

  if (fs.existsSync('/noSuchFile.js')) console.log('The path exists.');
  else console.log("no such path.");
  if (fs.existsSync('C:/Dropbox/TootEgozy/AppleSeeds/Exercises/NodeJS/ex2.1/NewName.txt')) console.log('This path exists.');
  else console.log("no such path.");