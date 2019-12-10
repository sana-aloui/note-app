// console.log("starting");

const note = require("./note.js");
const yargs = require("yargs");
// const argv = yargs.argv;
// console.log(yargs.argv)

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];
// console.log(title, body, command);

if (command === "add") {
    console.log("adding note");
    note.addingNote(title, body)
} else if (command === "remove") {
    console.log("removing note");
    note.removeNote(title)
} else if (command === "read") {
	console.log("reading list");
    note.readNote(title)
} else if (command === "list") {
    console.log("listening all note");
    note.getAll()
}
else{
    console.log("Unknown command was used!")
}