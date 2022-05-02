console.log("starting notes.js");

var addNote = (title, body) => {
    console.log("\nAdding note");
    console.log(`Name: ${title}`);
    console.log(`Body: ${body}`);
};

var getAll = () => {
    console.log("\nGetting all notes");
};

var read = (title) => {
    console.log("\nReading note:", title);
};

var remove = (title) => {
    console.log(`\nRemoving note: ${title}`);
}

module.exports = {
    addNote,
    getAll,
    read,
    remove
}