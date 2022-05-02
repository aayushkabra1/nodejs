const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of node',
    demand: true,
    alias: 't'
}
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: {
            describe: 'Body of a note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = process.argv[2];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) console.log(`Error: ${argv.title} already exists`);
    else {
        console.log(`Note ${note.title} created.`);
        notes.logNote(note);
    }
} 

else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(element => {
        notes.logNote(element);
    });
} 

else if (command === "read") {
    var note = notes.read(argv.title);
    if (note) {
        console.log("Note found");
        notes.logNote(note);
    }
    else {
        console.log(`Note ${argv.title} not found.`);
    }
} 

else if (command === "remove") {
    var removed = notes.remove(argv.title); 
    if (removed) console.log(`Note ${argv.title} removed.`);
    else console.log(`Note ${argv.title} not present.`);
} 

else {
    console.log("Command Not Found.");
}