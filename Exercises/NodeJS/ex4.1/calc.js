const yargs = require('yargs');

yargs.command({
    command: 'add',
    builder: {
        x: {
            demandOption: true
        },
        y: {
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(argv.x + argv.y);
    }
});

yargs.command({
    command: 'sub',
    builder: {
        x: {
            demandOption: true
        },
        y: {
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(argv.x - argv.y);
    }
});

yargs.command({
    command: 'mult',
    builder: {
        x: {
            demandOption: true
        },
        y: {
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(argv.x * argv.y);
    }
});

yargs.command({
    command: 'pow',
    builder: {
        x: {
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(argv.x ** 2);
    }
});

yargs.parse();